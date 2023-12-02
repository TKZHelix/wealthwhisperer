<script>
  import { isChatOpen } from "$lib/stores/messages";
  import "../app.css";
  import ChatBot from "../components/chatbot/ChatBot.svelte";
  import ChatSkeleton from "../components/chatbot/ChatSkeleton.svelte";
  import Navbar from '../components/navbar.svelte';
  import Footer from '../components/footer.svelte';
</script>

<Navbar />

<slot />

{#if $isChatOpen}
  <ChatBot />
{:else}
  <ChatSkeleton />
{/if}

<Footer />