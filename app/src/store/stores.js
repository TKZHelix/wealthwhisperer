import { writable } from 'svelte/store';

export let messageArray = writable([]);

export async function reply(text) {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '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', // Replace with your OpenAI API key
    },
    body: JSON.stringify({
      prompt: text,
      max_tokens: 50, // Adjust the number of tokens as needed
    }),
  });

  if (response.ok) {
    const data = await response.json();
    messageArray.update(value => [...value, { text, type: 'user' }, { text: data.choices[0].text.trim(), type: 'bot' }]);
  } else {
    console.error('Failed to send message');
  }
}

export function add(text) {
  messageArray.update(value => [...value, { text, type: 'user' }]);
}
