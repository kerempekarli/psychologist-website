import Review from "../models/review";

export async function createReview(userId, rating, reviewText) {
  // Yeni yorum oluştur ve kaydet
  const review = new Review({
    userId,
    rating,
    reviewText,
  });

  await review.save();
  return review;
}

export async function getReviews() {
  // Tüm yorumları kullanıcı bilgileriyle birlikte getir
  return await Review.find().populate("userId");
}

export async function getReviewById(id) {
  return await Review.findById(id).populate("userId");
}

export async function deleteReview(id) {
  // Yorumu sil
  return await Review.findByIdAndDelete(id);
}
