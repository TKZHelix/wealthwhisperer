<script>
    import BlogList from "../../components/blogList.svelte";
    import { onMount } from 'svelte';
  
    let blogs = [];
  
    onMount(async () => {
      const response = await fetch('http://localhost:1337/api/blogs');
      const data = await response.json();
      blogs = data.data;
    });

    console.log(blogs);

    export { blogs };
  </script>
  
  <div class="min-h-screen flex items-center justify-center">
    {#if blogs.length > 0}
      <div class="">
        <BlogList {blogs} />
      </div>
    {:else}
      <div class="flex justify-center items-center h-screen">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    {/if}
  </div>
  

  