# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Sources and Plagarism Statement
Took the test code from Lily Brongo, I did tweak a few of the test cases when I found they were incorrect.

Used this article [Wikipedia](https://en.wikipedia.org/wiki/Cycle_(graph_theory)#:~:text=In%20graph%20theory%2C%20a%20cycle,and%20last%20vertices%20are%20equal.) to make sure my understanding of graphs was correct. Used this video [TechDose](https://www.youtube.com/watch?v=0dJmTuMrUZM&ab_channel=Techdose) to help me figure out how to solve the problem.

No other sources were used.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
