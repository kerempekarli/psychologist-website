import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../services/blogService";

export async function handleCreateBlog(req, res) {
  const { title, content } = req.body;

  try {
    const blog = await createBlog(title, content);
    res.status(201).json({ message: "Blog başarıyla oluşturuldu", blog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function handleGetBlogs(req, res) {
  try {
    const blogs = await getBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Bloglar alınırken hata oluştu" });
  }
}

export async function handleGetBlogById(req, res) {
  const { id } = req.params;

  try {
    const blog = await getBlogById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: "Blog bulunamadı" });
  }
}

export async function handleUpdateBlog(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const blog = await updateBlog(id, title, content);
    res.status(200).json({ message: "Blog güncellendi", blog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function handleDeleteBlog(req, res) {
  const { id } = req.params;

  try {
    await deleteBlog(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
