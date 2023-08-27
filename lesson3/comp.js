Vue.component('blog-details', {
    template: `
        <div>
            <h2>Let&rsquo;s Get Solution for Building Construction Work</h2>
            <img src="Photo.png" alt="photo">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
        </div>
    `,
});

Vue.component('blogs-list', {
    data() {
        return {
            
        }
    },
    template: `
        <div>
            <h2>Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            
            <blog></blog>
        </div>
    `,
});
Vue.component('blog', {
    data() {
        return {
            bloglist: [
                {
                    id: 1,
                    tag: 'Kitchen',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 2,
                    tag: 'Bedroom',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 3,
                    tag: 'Building',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
            ],
            tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
        };
    },
    
    computed: {
        tagFilter() {
            if(this.bloglist.filter((el) => el.tag === this.tag)) {
                return this.el;
            }
          
          
        }
    },
    template: `
        <div>
        <button @click="tagFilter()" v-for="tag in tags" :key="tag.id">{{ tag }}</button>
            <ol>
                <li v-for="blog in bloglist" :key="blog.id">{{ blog.article }}</li>
            </ol>
        </div>
    `,
});
