import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslations } from "../Contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const { translations, language } = useTranslations();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogDetails();
    fetchRecentBlogs();
  }, [id, language]);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(`https://localhost:3000/api/Blog/${id}`);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
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

  const fetchRecentBlogs = async () => {
    try {
      const response = await axios.get("https://localhost:3000/api/Blog");
      setRecentBlogs(response.data.blogs.$values.slice(-3).reverse()); // Son 3 blogu ters çevirerek al
    } catch (error) {
      console.error("Error fetching recent blogs:", error);
    }
  };

  const renderTags = (blogTags, language) => {
    return blogTags.$values
      .map((blogTag) => {
        const tag = blogTag.tag;
        let tagName;
        switch (language) {
          case "tr":
            tagName = tag.nameTr;
            break;
          case "en":
            tagName = tag.nameEn;
            break;
          case "ar":
            tagName = tag.nameAr;
            break;
          default:
            tagName = tag.nameEn;
            break;
        }
        return tagName ? (
          <li key={blogTag.tagId}>
            <a href="#">{tagName}</a>
          </li>
        ) : null;
      })
      .filter(Boolean);
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  const handleBlogClick = (id) => {
    navigate(`/blog-details/${id}`);
  };

  return (
    <div className="blog-details-area pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="blog-details-item">
              <div className="blog-details-img">
                <img
                  src={`https://localhost:3000${blog.imgSrc}`}
                  alt="Blog Details"
                />
                <h2>{getTitle(blog)}</h2>
                <ul>
                  {blog.date && (
                    <li>
                      <i className="icofont-calendar"></i>
                      {blog.date}
                    </li>
                  )}
                </ul>
                <p
                  style={{ textAlign: "left" }}
                  dangerouslySetInnerHTML={{
                    __html: getDescription(blog),
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-details-item">
              <div className="blog-details-search">
                <div className="search-area">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button type="submit" className="btn blog-details-btn">
                    <i className="icofont-search-2"></i>
                  </button>
                </div>
                <h3>{translations.blogsPage.recentBlogs}</h3>
                <ul>
                  {recentBlogs.map((recentBlog) => (
                    <li
                      key={recentBlog.id}
                      onClick={() => handleBlogClick(recentBlog.id)}
                    >
                      <img
                        src={`https://localhost:3000${recentBlog.imgSrc}`}
                        alt="Blog Details"
                      />
                      <div className="blog-details-recent">
                        <h4>
                          <a href="#">
                            {recentBlog.titleTr ||
                              recentBlog.titleEn ||
                              recentBlog.titleAr}
                          </a>
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
              <div className="blog-details-tags">
                <h3>{translations.blogsPage.tags}</h3>
                <ul>{blog.blogTags && renderTags(blog.blogTags, language)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
