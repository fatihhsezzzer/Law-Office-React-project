import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { translations, language } = useTranslations();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs(currentPage, selectedCategory);
    fetchRecentBlogs();
    fetchCategories();
  }, [currentPage, language, selectedCategory]);

  const fetchBlogs = async (page, category) => {
    try {
      let url = `https://localhost:3000/api/Blog?pageNumber=${page}&pageSize=9`;
      if (category) {
        url = `https://localhost:3000/api/Category/${category}/blogs?pageNumber=${page}&pageSize=9`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(resolveReferences(data.blogs.$values || []));
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const response = await fetch(
        "https://localhost:3000/api/Blog?pageNumber=1&pageSize=9"
      );
      const data = await response.json();
      setRecentBlogs(resolveReferences(data.blogs.$values.slice(-3).reverse()));
    } catch (error) {
      console.error("Error fetching recent blogs:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://localhost:3000/api/Category");
      const data = await response.json();
      setCategories(resolveReferences(data.$values || []));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const resolveReferences = (data) => {
    const idMap = new Map();

    const traverse = (obj) => {
      if (typeof obj === "object" && obj !== null) {
        if (obj.$id) {
          idMap.set(obj.$id, obj);
        }
        Object.keys(obj).forEach((key) => traverse(obj[key]));
      }
    };

    traverse(data);

    const resolve = (obj) => {
      if (typeof obj === "object" && obj !== null) {
        if (obj.$ref) {
          return idMap.get(obj.$ref);
        }
        Object.keys(obj).forEach((key) => {
          obj[key] = resolve(obj[key]);
        });
      }
      return obj;
    };

    return resolve(data);
  };

  const getCategoryName = (category) => {
    switch (language) {
      case "tr":
        return category.nameTr || "Kategori Belirtilmemiş";
      case "en":
        return category.nameEn || "Category Not Specified";
      case "ar":
        return category.nameAr || "فئة غير محددة";
      default:
        return category.nameEn || "Category Not Specified";
    }
  };

  const getCategory = (blog) => {
    if (!blog.category) return "boşmu";
    switch (language) {
      case "tr":
        return blog.category.nameTr || "Kategori Belirtilmemiş";
      case "en":
        return blog.category.nameEn || "Category Not Specified";
      case "ar":
        return blog.category.nameAr || "فئة غير محددة";
      default:
        return blog.category.nameEn || "Category Not Specified";
    }
  };

  const getTitle = (blog) => {
    switch (language) {
      case "tr":
        return blog.titleTr || "Başlık Belirtilmemiş";
      case "en":
        return blog.titleEn || "Title Not Specified";
      case "ar":
        return blog.titleAr || "عنوان غير محدد";
      default:
        return blog.titleEn || "Title Not Specified";
    }
  };

  const getDescription = (blog) => {
    switch (language) {
      case "tr":
        return blog.descriptionTr || "<p>Açıklama Belirtilmemiş</p>";
      case "en":
        return blog.descriptionEn || "<p>Description Not Specified</p>";
      case "ar":
        return blog.descriptionAr || "<p>وصف غير محدد</p>";
      default:
        return blog.descriptionEn || "<p>Description Not Specified</p>";
    }
  };

  const getFullImageUrl = (path) => {
    return `https://localhost:3000${path}`;
  };

  const handleBlogClick = (id) => {
    navigate(`/blog-details/${id}`);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Filtre değiştiğinde sayfayı 1'e resetleyelim
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="blog-area pt-100">
      <div className="container">
        <div className="section-title">
          <span>{translations.blog}</span>
          <h2>{translations.latestBlogs}</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row">
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <div
                    className="col-sm-6 col-lg-4"
                    key={index}
                    onClick={() => handleBlogClick(blog.id)}
                  >
                    <div className="blog-item" style={{ height: "470px" }}>
                      <a href="#">
                        <img
                          src={getFullImageUrl(blog.imgSrc)}
                          alt="Blog"
                          className="blog-img"
                        />
                      </a>
                      <div className="blog-inner">
                        <span>{getCategory(blog)}</span>
                        <h3>
                          <a href="#">{getTitle(blog)}</a>
                        </h3>
                        <ul>
                          <li>
                            <i className="icofont-calendar"></i>
                            {blog.date || "Tarih Belirtilmemiş"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs available</p>
              )}
            </div>
            <div className="case-pagination">
              <ul>
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i className="icofont-simple-left"></i>
                  </button>
                </li>
                {[...Array(totalPages).keys()].map((number) => (
                  <li key={number + 1}>
                    <button
                      className={currentPage === number + 1 ? "active" : ""}
                      onClick={() => handlePageChange(number + 1)}
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <i className="icofont-simple-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-details-item">
              <div className="blog-details-category">
                <h3>{translations.blogsPage.category}</h3>
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      <a href="#">
                        {getCategoryName(category)}
                        <i className="icofont-arrow-right"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="blog-details-search">
                <h3>{translations.blogsPage.recentBlogs}</h3>
                <ul>
                  {recentBlogs.map((recentBlog) => (
                    <li
                      key={recentBlog.id}
                      onClick={() => handleBlogClick(recentBlog.id)}
                    >
                      <img
                        src={getFullImageUrl(recentBlog.imgSrc)}
                        alt="Blog Details"
                      />
                      <div className="blog-details-recent">
                        <h4>
                          <a href="#">{getTitle(recentBlog)}</a>
                        </h4>
                        <ul>
                          {recentBlog.date && (
                            <li>
                              <i className="icofont-calendar"></i>
                              {recentBlog.date}
                            </li>
                          )}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
