import Blog from '../models/blog';

export async function createBlog(title, content) {
  // Yeni blog oluştur ve kaydet
  const blog = new Blog({
    title,
    content,
  });

  await blog.save();
  return blog;
}

export async function getBlogs() {
  // Tüm blog yazılarını getir
  return await Blog.find();
}

export async function getBlogById(id) {
  return await Blog.findById(id);
}

export async function updateBlog(id, title, content) {
  // Blog yazısını güncelle
  return await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
}

export async function deleteBlog(id) {
  // Blog yazısını sil
  return await Blog.findByIdAndDelete(id);
}
