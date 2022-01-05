import matter from "gray-matter";
import CoursePost from '../components/ui/course/CoursePost';
const path = require("path")

export default function HomePage(props) {
    const realData = props.data.map(blog => matter(blog));
    let listItems = realData.map(listItem => listItem.data);
    return (
        <div>

            <h1>Home Page</h1>


            {listItems.map((blog, i) => (
                <CoursePost key={i} blog={blog} />
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const fs = require("fs");
  
    const files = fs.readdirSync(`${process.cwd()}/courses`, 'utf-8');
  
    const blogs = files.filter(fn => fn.endsWith(".md"));
  
    const data = blogs.map(blog => {
      const path = `${process.cwd()}/courses/${blog}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8"
      });
  
      return rawContent;
    });
    return {
        props: {
          data
        }
    }
  }