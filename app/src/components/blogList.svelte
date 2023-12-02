<script>
    export let blogs;
  </script>
  
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each blogs as blog}
        <div class="bg-white border-4 rounded-xl border-green-900 no-underline block text-center text-black shadow-md">
          <a href={`/blogs/${blog.id}`}>
            <img src={blog.attributes.Content[1].image.url} alt={blog.attributes.Title} class="w-full h-48 object-cover rounded-lg" />
          </a>
          <div class="px-6 py-2">
            <div class="flex flex-row">
              <h1 class="font-bold text-3xl mb-2 text-green-900">{blog.attributes.Title}</h1>
              <div class="px-6 py-2">
                <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{blog.attributes.Date}</span>
              </div>
            </div>
            <p class="text-gray-700 text-base">{blog.attributes.Description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>