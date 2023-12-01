import { useDispatch } from 'react-redux';
import * as Blogs from '../../assets/json/blogs.json'
import { getBlogs } from '@/redux/action/blogs.action';

export const blogs = Blogs.blogs;

export const categories = Blogs.categories;

export const pageData = {
    pageType: Blogs.pageType,
}