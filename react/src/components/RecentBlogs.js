import React, { useState } from 'react';
import ButtonStyle from './ButtonStyle';

const featuredBlogs = [

    {
        title: 'Generative AI: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'AI', // Add category information
    },

    {
        title: '.net: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: '.Net', // Add category information
    },

    {
        title: 'C++: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'C++', // Add category information
    },

    {
        title: 'iOS: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'iOS', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
    {
        title: 'Android: 3 AI Foundational Models You Must Know About',
        imageUrl: 'assets/img/blog/Blog-Design-01.3-400x250.png',
        date: 'Nov 30, 2023',
        content: 'asad In the fast-evolving digital realm, the influence of artificial intelligence (AI) is undeniable...',
        link: '#', // Replace with the actual link
        category: 'Android', // Add category information
    },
]



const categoryOptions = [
    { value: 'All Categories', label: 'All Categories' },
    { value: '.Net', label: '.Net' },
    { value: 'AI', label: 'AI' },
    { value: 'Android', label: 'Android' },
    { value: 'App Development', label: 'App Development' },
    { value: 'blockchain', label: 'blockchain' },
    { value: 'C++', label: 'C++' },
    { value: 'Database', label: 'Database' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Informational', label: 'Informational' },
    { value: 'iOS', label: 'iOS' },
    { value: 'Java', label: 'Java' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'ROR', label: 'ROR' },
    { value: 'SOC', label: 'SOC' },
    { value: 'Software Development', label: 'Software Development' },
    { value: 'UI/UX', label: 'UI/UX' },
    { value: 'Uncategorized', label: 'Uncategorized' },
    { value: 'Web Development', label: 'Web Development' },
];


function RecentBlogs() {

    const [selectedCategory, setSelectedCategory] = useState('0');
    const [searchInput, setSearchInput] = useState('');
    const [visibleBlogs, setVisibleBlogs] = useState(3);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };


    const filteredFeaturedBlogs = featuredBlogs.filter((blog) => {
        const categoryMatch = selectedCategory === '0' || blog.category === selectedCategory;
        const searchMatch = blog.title.toLowerCase().includes(searchInput.toLowerCase());
        return categoryMatch && searchMatch;
    });


    const loadMoreBlogs = () => {
        setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
    };

    const handleBackToBlogs = () => {
        setSearchInput('');
        setSelectedCategory('0');
        setVisibleBlogs(3);
    };

    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control rounded p-3"
                                name="ofsearch"
                                placeholder="Search Blog"
                                value={searchInput}
                                onChange={handleSearchInputChange}
                            />
                        </div>
                    </div>
                    <div className='col-6'>
                        <select
                            className="form-select rounded p-3"
                            aria-label="Default select example"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            {categoryOptions.map((category) => (
                                <option key={category.value} value={category.value}>{category.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='row my-5'>
                    <div>
                        {(searchInput || selectedCategory !== '0') && (
                            <h2>
                                Result
                                {searchInput && <span> for <q>{searchInput}</q></span>}
                                {searchInput && selectedCategory !== '0'}
                                {selectedCategory !== '0' && <span> in category of: <q>{selectedCategory}</q></span>}
                            </h2>
                        )}
                        {(!searchInput && selectedCategory === '0') && <h2>Featured Blogs</h2>}
                    </div>
                    {filteredFeaturedBlogs.slice(0, visibleBlogs).map((blog, index) => (
                        <div className='col-lg-4' key={index}>
                            <div className="card my-3 shadow">
                                <img src={blog.imageUrl} className="img-fluid rounded" alt="Blog-Design" />
                                <div className="card-body">
                                    <h2 className="entry-title text-truncate">
                                        <a href={blog.link}>{blog.title}</a>
                                    </h2>
                                    <p className="post-meta">
                                        <span className="published">{blog.date}</span>
                                    </p>
                                    <div className="text-truncate">
                                        <p>{blog.content}</p>
                                    </div>
                                    <a href={blog.link} className="link-color">read more
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {

                        (searchInput) ? <div className='row'>
                            <div className='col-lg-3 mt-5 '>
                                <ButtonStyle title={"Back to Blogs"} onChlickFunction={handleBackToBlogs} />
                            </div>
                        </div> : ""
                    }
                    {filteredFeaturedBlogs.length > visibleBlogs && (
                        <div className='col-lg-3 mt-5 mx-auto'>

                            <ButtonStyle title={"Load More"} onChlickFunction={loadMoreBlogs} />

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default RecentBlogs;
