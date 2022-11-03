import { createSlice } from '@reduxjs/toolkit';

// Images 
import img1 from './../assets/images/header-hero2.jpg';
import img2 from './../assets/images/madridBg.jpg';
import img3 from './../assets/images/header-hero3.jpg';
import img4 from './../assets/images/header-hero1.jpg';

export const blogReducer = createSlice({
    name: "blogReducer",
    initialState: {
        posts: [
            {
                id: 1,
                title: "Lorem ipsum",
                image: img1,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae?",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae?",
            },
            {
                id: 2,
                title: "Contrary to popular belief",
                image: img2,
                description: "Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae?",
            },
            {
                id: 3,
                title: "Cicero, written in 45 BC",
                image: img3,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae?",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae?",
            },
            {
                id: 4,
                title: "Qui repellat veniam odio",
                image: img4,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae?",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat veniam odio officiis commodi beatae?",
            }
        ]
    },
    reducers: {

    }
})

export default blogReducer.reducer;
