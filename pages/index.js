import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { SimpleGrid, Container } from "@chakra-ui/react";
import Articel_Card from "../components/Articel_Card";
import Hero from "../components/Hero"

export default function Home({ posts }) {
  return (
    <>
    <Hero/>
    <Container maxW='container.xl' >
    <SimpleGrid minChildWidth='300px' spacing='50px'>
      {posts.map((post, index) => (
        <Articel_Card
          thumbnail={post.frontMatter.thumbnailUrl}
          post={post}
          index={index}
        />
      ))}
    </SimpleGrid>
    </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

{
  /* <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.frontMatter.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={post.frontMatter.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
          </div> */
}
