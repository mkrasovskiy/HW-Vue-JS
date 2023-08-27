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
            articleArr: [],
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
                {
                    id: 4,
                    tag: 'Architecture',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 5,
                    tag: 'Kitchen Planning',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
            ],
        };
    },
    
    template: `
        <div>
            <button v-for="blog in bloglist" @click="">{{ blog.tag }}</button>
            <h2>Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <blog
            v-for="blog in bloglist"
            v-bind:key="blog.id"
            v-bind:blog="blog"
            ></blog>
        </div>
    `,
});
Vue.component('blog', {
    props: ['blog'],    
    template: `
        <div>
            
            <ul>
                <li v-bind:blog.article="this.textArticle">{{ blog.id }} {{ blog.article }}</li>
            </ul>
        </div>
    `,
});