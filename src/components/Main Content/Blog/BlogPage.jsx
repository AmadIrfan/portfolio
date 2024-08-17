/** @format */

import React from "react";
import blog1 from "../../../assets/images/blog-1.jpg";
import blog2 from "../../../assets/images/blog-2.jpg";
import blog3 from "../../../assets/images/blog-3.jpg";
import blog4 from "../../../assets/images/blog-4.jpg";
import blog5 from "../../../assets/images/blog-5.jpg";
import blog6 from "../../../assets/images/blog-6.jpg";

const BlogPage = ({ activeClassName }) => {
	let itemList = [
		{
			src: blog1,
			alt: "Design conferences in 2022",
			title: "Design conferences in 2022",
			category: "Design",
			date: "Feb 23, 2022",
			excerpt:
				"Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
		},
		{
			src: blog2,
			alt: "Best fonts every designer",
			title: "Best fonts every designer",
			category: "Design",
			date: "Feb 23, 2022",
			excerpt:
				"Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
		},
		{
			src: blog3,
			alt: "Design digest #80",
			title: "Design digest #80",
			category: "Design",
			date: "Feb 23, 2022",
			excerpt:
				"Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
		},
		{
			src: blog4,
			alt: "UI interactions of the week",
			title: "UI interactions of the week",
			category: "Design",
			date: "Feb 23, 2022",
			excerpt:
				"Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
		},
		{
			src: blog5,
			alt: "The forgotten art of spacing",
			title: "The forgotten art of spacing",
			category: "Design",
			date: "Feb 23, 2022",
			excerpt:
				"Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			src: blog6,
			alt: "Design digest #79",
			title: "Design digest #79",
			category: "Design",
			date: "Feb 23, 2022",
			excerpt:
				"Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
		},
	];
	return (
		<article className={activeClassName} data-page="blog">
			<header>
				<h2 className="h2 article-title">Blog</h2>
			</header>

			<section className="blog-posts">
				<ul className="blog-posts-list">
					{itemList.map((post, index) => (
						<li className="blog-post-item" key={index}>
							<a href="/#">
								<figure className="blog-banner-box">
									<img src={post.src} alt={post.alt} loading="lazy" />
								</figure>
								<div className="blog-content">
									<div className="blog-meta">
										<p className="blog-category">{post.category}</p>
										<span className="dot" />
										<time dateTime={post.date}>{post.date}</time>
									</div>
									<h3 className="h3 blog-item-title">{post.title}</h3>
									<p className="blog-text">{post.excerpt}</p>
								</div>
							</a>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
};

export default BlogPage;
