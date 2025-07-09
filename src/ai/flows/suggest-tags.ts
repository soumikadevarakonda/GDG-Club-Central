'use server';

/**
 * @fileOverview Suggests tags for learning materials based on the title and abstract.
 *
 * - suggestTags - A function that suggests tags for learning materials.
 * - SuggestTagsInput - The input type for the suggestTags function.
 * - SuggestTagsOutput - The return type for the suggestTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestTagsInputSchema = z.object({
  title: z.string().describe('The title of the learning material.'),
  abstract: z.string().describe('The abstract of the learning material.'),
});
export type SuggestTagsInput = z.infer<typeof SuggestTagsInputSchema>;

const SuggestTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of suggested tags for the learning material.'),
});
export type SuggestTagsOutput = z.infer<typeof SuggestTagsOutputSchema>;

export async function suggestTags(input: SuggestTagsInput): Promise<SuggestTagsOutput> {
  return suggestTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestTagsPrompt',
  input: {schema: SuggestTagsInputSchema},
  output: {schema: SuggestTagsOutputSchema},
  prompt: `You are a helpful assistant that suggests tags for learning materials based on the title and abstract.

  Title: {{{title}}}
  Abstract: {{{abstract}}}

  Please suggest at least 5 tags that are relevant to the learning material.`,
});

const suggestTagsFlow = ai.defineFlow(
  {
    name: 'suggestTagsFlow',
    inputSchema: SuggestTagsInputSchema,
    outputSchema: SuggestTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
