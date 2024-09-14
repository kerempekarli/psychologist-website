import {
  createReview,
  getReviews,
  getReviewById,
  deleteReview,
} from "../services/reviewService";

/**
 * Yeni bir yorum oluşturur.
 * @param {Request} req - İstek objesi (req).
 * @param {Response} res - Yanıt objesi (res).
 * @returns {Promise<void>}
 */
export async function handleCreateReview(req, res) {
  const { userId, rating, reviewText } = req.body;

  try {
    const review = await createReview(userId, rating, reviewText);
    res.status(201).json({ message: "Yorum başarıyla oluşturuldu", review });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

/**
 * Tüm yorumları getirir.
 * @param {Request} req - İstek objesi (req).
 * @param {Response} res - Yanıt objesi (res).
 * @returns {Promise<void>}
 */
export async function handleGetReviews(req, res) {
  try {
    const reviews = await getReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Yorumlar alınırken bir hata oluştu" });
  }
}

/**
 * Belirli bir yorumu getirir.
 * @param {Request} req - İstek objesi (req).
 * @param {Response} res - Yanıt objesi (res).
 * @returns {Promise<void>}
 */
export async function handleGetReviewById(req, res) {
  const { id } = req.params;

  try {
    const review = await getReviewById(id);
    if (!review) {
      return res.status(404).json({ message: "Yorum bulunamadı" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Belirli bir yorumu siler.
 * @param {Request} req - İstek objesi (req).
 * @param {Response} res - Yanıt objesi (res).
 * @returns {Promise<void>}
 */
export async function handleDeleteReview(req, res) {
  const { id } = req.params;

  try {
    await deleteReview(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Yorum silinirken bir hata oluştu" });
  }
}
