import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useTranslations } from "../Contexts/LanguageContext";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const { translations, language } = useTranslations();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://localhost:3000/api/Blog")
      .then((response) => response.json())
      .then((data) => {
        if (data.blogs && Array.isArray(data.blogs.$values)) {
          const recentBlogs = data.blogs.$values.slice(-10).reverse();
          setBlogs(recentBlogs);
        } else {
          console.error("Unexpected response format:", data);
          setBlogs([]);
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [language]);

  const getCategory = (blog) => {
    switch (language) {
      case "tr":
        return blog.category.nameTr && blog.category.nameTr !== "undefined"
          ? blog.category.nameTr
          : "Kategori Belirtilmemiş";
      case "en":
        return blog.category.nameEn && blog.category.nameEn !== "undefined"
          ? blog.category.nameEn
          : "Category Not Specified";
      case "ar":
        return blog.category.nameAr && blog.category.nameAr !== "undefined"
          ? blog.category.nameAr
          : "فئة غير محددة";
      default:
        return blog.category.nameEn && blog.category.nameEn !== "undefined"
          ? blog.category.nameEn
          : "Category Not Specified";
    }
  };

  const getTitle = (blog) => {
    switch (language) {
      case "tr":
        return blog.titleTr && blog.titleTr !== "undefined"
          ? blog.titleTr
          : "Başlık Belirtilmemiş";
      case "en":
        return blog.titleEn && blog.titleEn !== "undefined"
          ? blog.titleEn
          : "Title Not Specified";
      case "ar":
        return blog.titleAr && blog.titleAr !== "undefined"
          ? blog.titleAr
          : "عنوان غير محدد";
      default:
        return blog.titleEn && blog.titleEn !== "undefined"
          ? blog.titleEn
          : "Title Not Specified";
    }
  };

  const getDescription = (blog) => {
    switch (language) {
      case "tr":
        return blog.descriptionTr && blog.descriptionTr !== "undefined"
          ? blog.descriptionTr
          : "<p>Açıklama Belirtilmemiş</p>";
      case "en":
        return blog.descriptionEn && blog.descriptionEn !== "undefined"
          ? blog.descriptionEn
          : "<p>Description Not Specified</p>";
      case "ar":
        return blog.descriptionAr && blog.descriptionAr !== "undefined"
          ? blog.descriptionAr
          : "<p>وصف غير محدد</p>";
      default:
        return blog.descriptionEn && blog.descriptionEn !== "undefined"
          ? blog.descriptionEn
          : "<p>Description Not Specified</p>";
    }
  };

  const getFullImageUrl = (path) => {
    return `https://localhost:3000${path}`;
  };

  const handleBlogClick = (id) => {
    navigate(`/blog-details/${id}`);
  };

  return (
    <section className="blog-area pt-100">
      <div className="container">
        <div className="section-title">
          <span>{translations.blog}</span>
          <h2>{translations.latestBlogs}</h2>
        </div>
        <OwlCarousel className="blog-slider owl-theme" loop margin={10} nav>
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                className="blog-item"
                key={index}
                onClick={() => handleBlogClick(blog.id)}
              >
                <a href="#">
                  <img src={getFullImageUrl(blog.imgSrc)} alt="Blog" />
                </a>
                <div className="blog-inner">
                  <span>{getCategory(blog)}</span>
                  <h3>
                    <a href="#">{getTitle(blog)}</a>
                  </h3>
                  <ul>
                    <li>
                      <i className="icofont-calendar"></i>
                      {blog.date && blog.date !== "undefined"
                        ? blog.date
                        : "Tarih Belirtilmemiş"}
                    </li>
                    <li>
                      <i className="icofont-user-alt-7"></i>
                      <a href="#">
                        {blog.author && blog.author !== "undefined"
                          ? blog.author
                          : "Yazar Belirtilmemiş"}
                      </a>
                    </li>
                  </ul>
                  <p
                    dangerouslySetInnerHTML={{ __html: getDescription(blog) }}
                  ></p>
                  <a className="blog-link" href="#">
                    {translations.readMore}
                    <i className="icofont-simple-right"></i>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div>{translations.noBlogsFound}</div>
          )}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default BlogSection;
