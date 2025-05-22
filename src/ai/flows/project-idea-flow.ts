
'use server';
/**
 * @fileOverview An AI flow to generate project ideas.
 *
 * - suggestProjectIdea - A function that generates a new project idea.
 * - ProjectIdeaInput - The input type for the suggestProjectIdea function (currently empty).
 * - ProjectIdeaOutput - The return type for the suggestProjectIdea function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input schema (currently empty, can be expanded later e.g., with categories)
const ProjectIdeaInputSchema = z.object({
  // Example: category: z.string().optional().describe('Optional category for the project idea (e.g., "web app", "mobile game")')
});
export type ProjectIdeaInput = z.infer<typeof ProjectIdeaInputSchema>;

const ProjectIdeaOutputSchema = z.object({
  projectName: z.string().describe('A catchy and descriptive name for the project.'),
  projectDescription: z.string().describe('A brief, engaging description of the project (2-3 sentences).'),
  suggestedTech: z.array(z.string()).describe('A list of 3-5 key technologies or tools suitable for building this project.'),
});
export type ProjectIdeaOutput = z.infer<typeof ProjectIdeaOutputSchema>;

export async function suggestProjectIdea(input: ProjectIdeaInput): Promise<ProjectIdeaOutput> {
  return projectIdeaGeneratorFlow(input);
}

const projectIdeaPrompt = ai.definePrompt({
  name: 'projectIdeaPrompt',
  input: { schema: ProjectIdeaInputSchema },
  output: { schema: ProjectIdeaOutputSchema },
  prompt: `You are a creative AI assistant that helps developers brainstorm new project ideas. 
Generate a unique and interesting project idea. 
The project should be something a web developer could realistically build for their portfolio.
Provide a catchy project name, a short description, and a few key technologies.

{{#if category}}
Focus the idea around the category: {{{category}}}.
{{/if}}

Output the response in the specified JSON format.
`,
});

const projectIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'projectIdeaGeneratorFlow',
    inputSchema: ProjectIdeaInputSchema,
    outputSchema: ProjectIdeaOutputSchema,
  },
  async (input) => {
    const { output } = await projectIdeaPrompt(input);
    if (!output) {
      throw new Error('The AI failed to generate a project idea. Please try again.');
    }
    return output;
  }
);
