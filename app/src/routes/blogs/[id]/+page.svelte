<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  const { id } = $page.params;
  let blogs = [];

  onMount(async () => {
    const response = await fetch('http://localhost:1337/api/blogs');
    const data = await response.json();
    blogs = data.data;
  });

  $: blog = blogs.find(blog => blog.id === Number(id));


  console.log(blog);
  console.log(blogs);
  console.log(id);

</script>

<div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
  {#if blog}
    <h1 class="text-4xl font-bold text-center my-8">{blog.attributes.Title}</h1>
    <p class="text-lg text-center my-4">{new Date(blog.attributes.Date).toLocaleDateString()}</p>
    {#each blog.attributes.Content as content}
      {#if content.type === 'paragraph'}
        <p class="text-lg text-center my-4">
          {#each content.children as child}
            {child.text}
          {/each}
        </p>
      {:else if content.type === 'image'}
        <img class="w-full h-auto my-4" src={content.image.url} alt={content.image.alternativeText} />
      {:else if content.type === 'code'}
        <pre class="p-4 bg-gray-800 text-white rounded my-4 text-center">
          {#each content.children as child}
            {child.text}
          {/each}
        </pre>
      {:else if content.type === 'heading'}
        {#if content.level === 1}
          <h1 class="text-3xl font-bold my-4 text-center">{content.children[0].text}</h1>
        {:else if content.level === 2}
          <h2 class="text-2xl font-bold my-4 text-center">{content.children[0].text}</h2>
        {/if}
      {/if}
    {/each}
  {:else}
    <div class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
    </div>
  {/if}
</div>
