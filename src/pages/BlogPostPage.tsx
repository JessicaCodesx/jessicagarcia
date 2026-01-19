import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import blogPosts from '../data/blogPosts.json'
import SEOHead from '../components/SEOHead'
import { renderMarkdown } from '../utils/markdown'

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>()
  const postId = id ? parseInt(id) : null
  const post = blogPosts.find(p => p.id === postId && p.published)
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })

  if (!post) {
    return (
      <div className="pt-16 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // Get full content for each post
  const getPostContent = (postId: number) => {
    const contentMap: Record<number, string> = {
      1: `# Understanding Finite Automata: A Beginner's Guide to State Machines

Finite automata are fundamental concepts in computer science that form the basis for understanding how computers process information. Whether you're studying theory of computation or building state machines in your code, understanding finite automata is essential.

## What is a Finite Automaton?

A finite automaton (FA) is a mathematical model of computation that consists of:
- **A finite set of states** - The different conditions the system can be in
- **An alphabet** - The set of input symbols
- **A transition function** - Rules that determine state changes
- **A start state** - Where the computation begins
- **Accept states** - States that indicate successful completion

Think of it like a vending machine: you insert coins (input), the machine transitions through different states (waiting, processing, dispensing), and eventually reaches an accept state (product delivered) or reject state (insufficient funds).

## Types of Finite Automata

### Deterministic Finite Automata (DFA)

In a DFA, for every state and every input symbol, there is exactly one transition. This means the behavior is completely predictable.

**Example:** A simple DFA that accepts strings ending in "01":
- State q0: initial state
- State q1: last character was "0"
- State q2: accept state (last two characters were "01")

### Non-Deterministic Finite Automata (NFA)

NFAs allow multiple possible transitions for the same input symbol, or transitions on empty strings (ε). This flexibility makes them easier to design, but they can be converted to DFAs.

## Practical Applications

### 1. Text Processing and Pattern Matching

Finite automata power regular expressions and string matching algorithms. When you use regex to validate email addresses or search for patterns, you're essentially using finite automata.

### 2. Compiler Design

Lexical analyzers (scanners) in compilers use finite automata to recognize tokens like keywords, identifiers, and operators. This is the first phase of compilation.

### 3. State Machines in Software

Many software systems use state machines modeled after finite automata:
- Game engines (character states: idle, walking, jumping)
- User interface flows (login → dashboard → settings)
- Network protocols (connection states)
- Workflow engines

## Building a Simple State Machine

Here's a practical example in JavaScript:

\`\`\`javascript
class SimpleStateMachine {
  constructor() {
    this.state = 'idle';
    this.transitions = {
      idle: { start: 'running' },
      running: { pause: 'paused', stop: 'idle' },
      paused: { resume: 'running', stop: 'idle' }
    };
  }

  transition(action) {
    const nextState = this.transitions[this.state]?.[action];
    if (nextState) {
      this.state = nextState;
      return true;
    }
    return false; // Invalid transition
  }
}
\`\`\`

## Why It Matters

Understanding finite automata helps you:
- **Design better algorithms** - Recognize when state machines are appropriate
- **Understand compilers** - Know how your code gets processed
- **Build robust systems** - Model complex behaviors with simple state transitions
- **Solve interview problems** - Many coding challenges involve state management

## Conclusion

Finite automata might seem abstract, but they're everywhere in computing. From the regex patterns you write daily to the compilers that process your code, finite automata provide the theoretical foundation for understanding computation itself.

As you continue learning, you'll discover that finite automata are just the beginning. They lead to pushdown automata, Turing machines, and the beautiful theory that explains what computers can and cannot do.`,

      2: `# Recursion Explained: From Basics to Advanced Patterns

Recursion is one of those concepts that clicks differently for everyone. Some developers love its elegance; others find it confusing. Let me break it down in a way that makes sense, from the fundamentals to practical patterns you'll use in real projects.

## What is Recursion?

Recursion is when a function calls itself. That's it. But understanding *when* and *why* to use it is where the magic happens.

Every recursive function needs:
1. **Base case** - The condition that stops the recursion
2. **Recursive case** - The function calling itself with a modified input

Without a base case, you get infinite recursion (and a stack overflow error).

## The Classic Example: Factorial

Let's start with the mathematical definition:
- 0! = 1 (base case)
- n! = n × (n-1)! (recursive case)

\`\`\`javascript
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}
\`\`\`

When you call \`factorial(5)\`, here's what happens:
1. factorial(5) = 5 × factorial(4)
2. factorial(4) = 4 × factorial(3)
3. factorial(3) = 3 × factorial(2)
4. factorial(2) = 2 × factorial(1)
5. factorial(1) = 1 (base case)

Then it "unwinds" back up, multiplying as it goes: 1 × 2 × 3 × 4 × 5 = 120.

## Thinking Recursively

The key to recursion is thinking about problems in terms of:
- **What's the smallest version of this problem?** (base case)
- **How can I break this into a smaller version + some work?** (recursive case)

### Example: Finding the Maximum in an Array

\`\`\`javascript
function findMax(arr, index = 0) {
  // Base case: last element
  if (index === arr.length - 1) {
    return arr[index];
  }
  // Recursive case: compare current with max of rest
  return Math.max(arr[index], findMax(arr, index + 1));
}
\`\`\`

## Common Recursive Patterns

### 1. Tree/Graph Traversal

Recursion is natural for tree structures:

\`\`\`javascript
function traverseTree(node) {
  if (!node) return; // Base case
  
  console.log(node.value);
  traverseTree(node.left);
  traverseTree(node.right);
}
\`\`\`

### 2. Divide and Conquer

Break problems into smaller subproblems:

\`\`\`javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // Base case: not found
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid; // Base case: found
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, right);
}
\`\`\`

### 3. Backtracking

Try possibilities and undo if they don't work:

\`\`\`javascript
function solveSudoku(board) {
  // Find empty cell
  // Try numbers 1-9
  // If valid, recursively solve
  // If solution found, return true
  // Otherwise, backtrack (undo) and try next number
}
\`\`\`

## Recursion vs Iteration

When should you use recursion vs loops?

**Use recursion when:**
- The problem naturally has a recursive structure (trees, graphs)
- The recursive solution is clearer and more maintainable
- You're doing divide-and-conquer algorithms

**Use iteration when:**
- Performance is critical (recursion has function call overhead)
- The problem is naturally iterative
- You want to avoid stack overflow risks

## Tail Recursion and Optimization

Tail recursion is when the recursive call is the last operation. Some languages optimize this to avoid stack growth:

\`\`\`javascript
// Not tail recursive (does work after recursive call)
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); // Multiplication happens after
}

// Tail recursive version
function factorialTail(n, accumulator = 1) {
  if (n === 1) return accumulator;
  return factorialTail(n - 1, n * accumulator); // All work done before call
}
\`\`\`

## Common Pitfalls

1. **Forgetting the base case** - Infinite recursion
2. **Base case never reached** - Infinite recursion
3. **Not reducing problem size** - Infinite recursion
4. **Stack overflow** - Deep recursion on large inputs

## My Take: When Recursion Makes Sense

I love recursion for tree problems and divide-and-conquer algorithms. It makes the code read almost like the problem definition. But I'm pragmatic: if a loop is clearer or more performant, I use that instead.

The best developers know both approaches and choose based on context. Recursion isn't always the answer, but when it fits, it's beautiful.

## Conclusion

Recursion is a powerful tool that, once understood, opens up elegant solutions to complex problems. Start with simple examples, practice on tree problems, and gradually work up to more complex patterns. The key is recognizing when a problem has a recursive structure and breaking it down into base and recursive cases.

Remember: every recursive function can be written iteratively, and vice versa. The choice often comes down to clarity, maintainability, and performance requirements.`,

      3: `# Time Complexity and Big O Notation: A Practical Guide

Big O notation is everywhere in computer science interviews and technical discussions. But what does it actually mean, and why should you care? Let me explain it in practical terms that you can actually use.

## What is Big O Notation?

Big O notation describes how the runtime or space requirements of an algorithm grow as the input size increases. It's about the *worst-case* scenario and focuses on the *trend*, not exact numbers.

The "O" stands for "order of" - we're describing the order of growth.

## Common Time Complexities (From Best to Worst)

### O(1) - Constant Time

The algorithm takes the same amount of time regardless of input size.

\`\`\`javascript
function getFirst(arr) {
  return arr[0]; // Always one operation
}
\`\`\`

**Example:** Array access, hash table lookup

### O(log n) - Logarithmic Time

Each step eliminates half the remaining possibilities. Very efficient!

\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
\`\`\`

**Example:** Binary search, balanced tree operations

### O(n) - Linear Time

Runtime grows proportionally with input size.

\`\`\`javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
\`\`\`

**Example:** Iterating through an array, linked list traversal

### O(n log n) - Linearithmic Time

Common in efficient sorting algorithms.

\`\`\`javascript
// Merge sort, quicksort (average case)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
\`\`\`

**Example:** Merge sort, heap sort, some divide-and-conquer algorithms

### O(n²) - Quadratic Time

Nested loops are the classic sign.

\`\`\`javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
\`\`\`

**Example:** Bubble sort, selection sort, nested iterations

### O(2ⁿ) - Exponential Time

Runtime doubles with each additional input element. Very slow!

\`\`\`javascript
function fibonacciNaive(n) {
  if (n <= 1) return n;
  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
}
\`\`\`

**Example:** Naive recursive Fibonacci, brute force algorithms

## How to Analyze Complexity

### Step 1: Identify the Input Size

What's "n"? Usually the size of the input data structure.

### Step 2: Count Operations

Focus on the operations that grow with input size. Constants don't matter in Big O.

### Step 3: Find the Dominant Term

O(n² + n + 1) = O(n²) because n² dominates for large n.

### Step 4: Drop Constants and Lower-Order Terms

- O(3n) = O(n)
- O(n + 5) = O(n)
- O(n² + n) = O(n²)

## Practical Examples

### Example 1: Finding Duplicates

\`\`\`javascript
// O(n²) - nested loops
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// O(n) - using a Set
function hasDuplicatesOptimized(arr) {
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
}
\`\`\`

The second version trades space (O(n) for the Set) for better time complexity.

### Example 2: Array Operations

\`\`\`javascript
// O(1) - direct access
arr[0];

// O(n) - might need to shift elements
arr.unshift(item);

// O(n) - might need to shift elements
arr.splice(0, 1);
\`\`\`

## Space Complexity

Big O also applies to memory usage:

- O(1) - Constant space (a few variables)
- O(n) - Linear space (array, hash table)
- O(n²) - Quadratic space (2D array)

## Why It Matters

Understanding Big O helps you:
- **Choose the right algorithm** - O(n log n) sort vs O(n²) sort
- **Optimize bottlenecks** - Identify slow code
- **Scale systems** - Predict performance at scale
- **Ace interviews** - Technical discussions require this knowledge

## My Opinion: Practical vs Theoretical

In real projects, sometimes the "worse" algorithm is fine:
- Small datasets: O(n²) might be simpler and fast enough
- Readability matters: Sometimes clarity > optimization
- Premature optimization is the root of all evil

But understanding Big O helps you make informed decisions. When your data grows 10x, will your algorithm still work? That's what Big O tells you.

## Common Mistakes

1. **Confusing best/average/worst case** - Big O is worst case
2. **Ignoring constants** - O(1000n) is still O(n), but might matter in practice
3. **Not considering space** - Time isn't everything
4. **Over-optimizing** - Sometimes O(n²) is perfectly fine

## Conclusion

Big O notation is a tool for thinking about scalability. It's not about exact performance, but about understanding how algorithms behave as data grows. Master the basics, practice analyzing code, and you'll make better technical decisions.

Remember: the goal isn't always the fastest algorithm, but the right algorithm for your use case. Big O helps you understand the tradeoffs.`,

      4: `# Understanding REST APIs: Design Principles and Best Practices

REST APIs are the backbone of modern web development. Whether you're building a frontend that consumes APIs or designing backend services, understanding REST principles is essential. Let me share what I've learned from building and consuming APIs.

## What is REST?

REST (Representational State Transfer) is an architectural style for designing web services. It's not a protocol or standard, but a set of principles that make APIs predictable and easy to use.

Key principles:
- **Stateless** - Each request contains all information needed
- **Resource-based** - URLs represent resources, not actions
- **HTTP methods** - Use GET, POST, PUT, DELETE appropriately
- **Standard status codes** - Communicate results clearly

## RESTful URL Design

### Good Examples

\`\`\`
GET    /api/users           # Get all users
GET    /api/users/123        # Get user with ID 123
POST   /api/users            # Create a new user
PUT    /api/users/123        # Update user 123 (full update)
PATCH  /api/users/123        # Partial update
DELETE /api/users/123        # Delete user 123
\`\`\`

### Bad Examples

\`\`\`
GET    /api/getUsers
POST   /api/createUser
GET    /api/user/delete/123
POST   /api/users/123/update
\`\`\`

**Why?** The HTTP method already tells you what action to perform. The URL should describe the resource.

## HTTP Methods and Their Meanings

### GET - Retrieve Data

Safe and idempotent. Should never modify data.

\`\`\`javascript
// Good
GET /api/users/123

// Bad - modifying data with GET
GET /api/users/123/delete
\`\`\`

### POST - Create Resources

Not idempotent. Each call may create a new resource.

\`\`\`javascript
POST /api/users
Body: { "name": "Jessica", "email": "jessica@example.com" }
\`\`\`

### PUT - Full Update

Idempotent. Replaces the entire resource.

\`\`\`javascript
PUT /api/users/123
Body: { "name": "Jessica Garcia", "email": "jessica@example.com", "role": "developer" }
\`\`\`

### PATCH - Partial Update

Updates only specified fields.

\`\`\`javascript
PATCH /api/users/123
Body: { "email": "newemail@example.com" }
\`\`\`

### DELETE - Remove Resources

Idempotent. Deleting twice has the same effect as deleting once.

\`\`\`javascript
DELETE /api/users/123
\`\`\`

## HTTP Status Codes

Status codes communicate results clearly:

### 2xx - Success
- **200 OK** - Successful GET, PUT, PATCH
- **201 Created** - Successful POST (resource created)
- **204 No Content** - Successful DELETE

### 4xx - Client Error
- **400 Bad Request** - Invalid request format
- **401 Unauthorized** - Authentication required
- **403 Forbidden** - Authenticated but not authorized
- **404 Not Found** - Resource doesn't exist
- **422 Unprocessable Entity** - Valid format but semantic errors

### 5xx - Server Error
- **500 Internal Server Error** - Something went wrong
- **503 Service Unavailable** - Server temporarily down

## Request and Response Formats

### Request Headers

\`\`\`javascript
Content-Type: application/json
Authorization: Bearer <token>
Accept: application/json
\`\`\`

### Response Structure

\`\`\`json
{
  "data": {
    "id": 123,
    "name": "Jessica Garcia",
    "email": "jessica@example.com"
  },
  "meta": {
    "timestamp": "2025-01-27T10:00:00Z"
  }
}
\`\`\`

For errors:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": {
      "field": "email",
      "reason": "missing"
    }
  }
}
\`\`\`

## Best Practices

### 1. Use Plural Nouns for Collections

\`\`\`
/api/users        ✅
/api/user         ❌
\`\`\`

### 2. Version Your API

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

### 3. Use Query Parameters for Filtering

\`\`\`
GET /api/users?role=developer&active=true
GET /api/users?page=1&limit=20
\`\`\`

### 4. Implement Pagination

\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
\`\`\`

### 5. Use Consistent Naming

- camelCase or snake_case (pick one and stick with it)
- Consistent field names across resources
- Clear, descriptive names

### 6. Handle Errors Gracefully

Always return meaningful error messages:

\`\`\`json
{
  "error": {
    "message": "User not found",
    "code": "USER_NOT_FOUND",
    "resource": "/api/users/999"
  }
}
\`\`\`

## Authentication and Authorization

### JWT Tokens

\`\`\`javascript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

### API Keys

\`\`\`javascript
X-API-Key: your-api-key-here
\`\`\`

## My Experience: Common Pitfalls

1. **Mixing concerns** - Don't put business logic in URL design
2. **Inconsistent responses** - Same endpoint should always return same structure
3. **Ignoring status codes** - Use them correctly!
4. **Over-fetching** - Return only what clients need
5. **No documentation** - Document your API thoroughly

## Conclusion

REST APIs are about predictability and simplicity. When done well, they're intuitive - developers can guess the endpoint structure. Follow the principles, use HTTP methods correctly, return proper status codes, and your APIs will be a joy to work with.

The best APIs feel natural. If you have to look up documentation for every endpoint, the design might need work. Strive for that intuitive feel where the URL structure tells a story.`,

      5: `# React Hooks Deep Dive: useState, useEffect, and Custom Hooks

React Hooks revolutionized how we write React components. They let us use state and lifecycle features in functional components, making code more reusable and easier to understand. Let me break down the most important hooks and how to use them effectively.

## Why Hooks?

Before hooks, you needed class components for state and lifecycle methods. Hooks let functional components do everything class components could, with cleaner syntax and better code organization.

## useState: Managing Component State

\`useState\` is the most fundamental hook. It lets you add state to functional components.

### Basic Usage

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### Important Points

1. **State updates are asynchronous** - Multiple setState calls might batch
2. **Use functional updates** when new state depends on previous:

\`\`\`javascript
// Good - when state depends on previous value
setCount(prev => prev + 1);

// Also fine - when it doesn't
setCount(5);
\`\`\`

3. **State is immutable** - Always create new objects/arrays:

\`\`\`javascript
// Bad
const [user, setUser] = useState({ name: 'Jessica' });
user.name = 'New Name'; // Don't mutate!
setUser(user);

// Good
setUser({ ...user, name: 'New Name' });
\`\`\`

### Multiple State Variables

\`\`\`javascript
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);
\`\`\`

Or use an object (when values are related):

\`\`\`javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  age: 0
});
\`\`\`

## useEffect: Side Effects and Lifecycle

\`useEffect\` handles side effects - things that happen "outside" the render cycle.

### Basic Structure

\`\`\`javascript
useEffect(() => {
  // Side effect code here
  
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]);
\`\`\`

### Common Patterns

#### 1. Run Once on Mount

\`\`\`javascript
useEffect(() => {
  fetchData();
}, []); // Empty array = run once
\`\`\`

#### 2. Run on Dependency Change

\`\`\`javascript
useEffect(() => {
  fetchUserData(userId);
}, [userId]); // Runs when userId changes
\`\`\`

#### 3. Cleanup on Unmount

\`\`\`javascript
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => {
    clearInterval(interval); // Cleanup
  };
}, []);
\`\`\`

#### 4. Run on Every Render (Rare)

\`\`\`javascript
useEffect(() => {
  // Runs after every render
}); // No dependency array
\`\`\`

### Common Mistakes

1. **Missing dependencies** - Causes stale closures
2. **Infinite loops** - Updating state in useEffect without proper dependencies
3. **Forgetting cleanup** - Memory leaks from subscriptions/intervals

## Custom Hooks: Reusable Logic

Custom hooks let you extract and reuse stateful logic.

### Example: useFetch Hook

\`\`\`javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}
\`\`\`

### Example: useLocalStorage Hook

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}
\`\`\`

## Other Important Hooks

### useCallback - Memoize Functions

\`\`\`javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

### useMemo - Memoize Values

\`\`\`javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

### useRef - Persistent References

\`\`\`javascript
const inputRef = useRef(null);

<input ref={inputRef} />
inputRef.current.focus();
\`\`\`

## My Opinion: When to Use What

- **useState** - Any component state
- **useEffect** - API calls, subscriptions, DOM manipulation
- **Custom hooks** - When logic is reused or complex
- **useCallback/useMemo** - Performance optimization (use sparingly)
- **useRef** - DOM references, values that don't trigger re-renders

## Best Practices

1. **Keep effects focused** - One effect, one purpose
2. **Extract custom hooks** - Reuse logic across components
3. **Don't over-optimize** - useCallback/useMemo only when needed
4. **Follow the rules** - Only call hooks at the top level
5. **Clean up** - Always clean up subscriptions, intervals, etc.

## Conclusion

Hooks make React code more functional, reusable, and easier to reason about. Start with useState and useEffect, then build custom hooks as patterns emerge. The key is understanding when each hook is appropriate and following React's rules.

Master these fundamentals, and you'll write cleaner, more maintainable React code. Hooks aren't just syntax - they're a different way of thinking about component logic.`,

      6: `# Database Normalization: From First to Third Normal Form

Database normalization is one of those topics that sounds intimidating but is actually straightforward once you understand the principles. It's about organizing data to reduce redundancy and prevent anomalies. Let me explain it with practical examples.

## What is Normalization?

Normalization is the process of organizing data in a database to:
- **Eliminate redundancy** - Don't store the same data multiple times
- **Prevent update anomalies** - Changes should only need to happen in one place
- **Ensure data integrity** - Maintain consistency and accuracy

## Why Normalize?

### Problems with Unnormalized Data

Imagine a table storing orders:

\`\`\`
Orders Table:
OrderID | CustomerName | CustomerEmail      | Product | Price
--------|-------------|-------------------|---------|------
1       | Jessica     | jessica@email.com | Laptop  | 999
1       | Jessica     | jessica@email.com | Mouse   | 25
2       | John        | john@email.com    | Laptop  | 999
\`\`\`

**Problems:**
- Customer info repeated for each order item
- If Jessica's email changes, we must update multiple rows
- Risk of inconsistent data (typos, partial updates)
- Wasted storage space

Normalization fixes these issues.

## First Normal Form (1NF)

**Rules:**
1. Each column contains atomic values (no arrays/lists)
2. Each row is unique
3. No repeating groups

### Example: Violating 1NF

\`\`\`
Students Table:
StudentID | Name    | Courses
----------|---------|------------------
1         | Jessica | Math, CS, English
\`\`\`

**Problem:** Courses column has multiple values.

### Fixed for 1NF

\`\`\`
Students Table:
StudentID | Name    | Course
----------|---------|--------
1         | Jessica | Math
1         | Jessica | CS
1         | Jessica | English
\`\`\`

Or better, use a junction table:

\`\`\`
Students:          Enrollments:
StudentID | Name   | StudentID | CourseID
----------|--------|-----------|----------
1         | Jessica| 1         | 1
                     1         | 2
                     1         | 3
\`\`\`

## Second Normal Form (2NF)

**Rules:**
1. Must be in 1NF
2. All non-key attributes must depend on the entire primary key

### Example: Violating 2NF

\`\`\`
OrderItems Table:
OrderID | ProductID | ProductName | Quantity | Price
--------|-----------|-------------|----------|------
1       | 101       | Laptop      | 1        | 999
1       | 102       | Mouse       | 2        | 25
\`\`\`

**Primary Key:** (OrderID, ProductID)

**Problem:** ProductName and Price depend only on ProductID, not the full key.

### Fixed for 2NF

Split into two tables:

\`\`\`
OrderItems:              Products:
OrderID | ProductID | Qty | ProductID | ProductName | Price
--------|-----------|-----|-----------|-------------|------
1       | 101       | 1   | 101       | Laptop      | 999
1       | 102       | 2   | 102       | Mouse       | 25
\`\`\`

## Third Normal Form (3NF)

**Rules:**
1. Must be in 2NF
2. No transitive dependencies (non-key attributes shouldn't depend on other non-key attributes)

### Example: Violating 3NF

\`\`\`
Employees Table:
EmployeeID | Name    | Department | DepartmentLocation
-----------|---------|------------|-------------------
1          | Jessica | Engineering| Building A
2          | John    | Engineering| Building A
3          | Sarah   | Sales      | Building B
\`\`\`

**Problem:** DepartmentLocation depends on Department, not EmployeeID.

### Fixed for 3NF

\`\`\`
Employees:              Departments:
EmployeeID | Name | DeptID | DeptID | Name        | Location
-----------|------|--------|--------|-------------|----------
1          | Jessica | 1    | 1      | Engineering | Building A
2          | John    | 1    | 2      | Sales       | Building B
3          | Sarah    | 2    |
\`\`\`

## When to Denormalize

Sometimes, you intentionally denormalize for performance:

- **Read-heavy applications** - Fewer joins = faster queries
- **Reporting databases** - Data warehouses often denormalize
- **Caching** - Store computed values

**Trade-off:** Performance vs. data integrity and storage

## Practical Example: E-Commerce Database

### Unnormalized (Bad)

\`\`\`
Orders:
OrderID | CustomerName | CustomerEmail | ProductName | Price | Quantity
\`\`\`

### Normalized (Good)

\`\`\`
Customers:        Orders:          OrderItems:      Products:
CustomerID | Name | OrderID | CustID | OrderID | ProdID | Qty | ProductID | Name | Price
\`\`\`

## My Take: Practical Normalization

In real projects:
- **Start normalized** - Easier to denormalize later than normalize later
- **Don't over-normalize** - 3NF is usually enough
- **Consider your use case** - Read-heavy? Maybe denormalize
- **Document decisions** - Why did you denormalize?

## Common Mistakes

1. **Over-normalization** - Too many joins hurt performance
2. **Under-normalization** - Data redundancy causes bugs
3. **Ignoring the use case** - One size doesn't fit all
4. **Premature optimization** - Normalize first, optimize later

## Conclusion

Normalization is about balance. Too little, and you have data integrity issues. Too much, and queries become slow. Understand the principles, apply them thoughtfully, and don't be afraid to denormalize when performance requires it.

The goal isn't perfect normalization - it's a database design that serves your application's needs while maintaining data integrity. Start with 3NF, measure performance, and adjust as needed.`,

      7: `# Building My First Production Mobile App: Lessons Learned

Building homebase, my local-first family management app, taught me more about software engineering than any course or tutorial. Let me share the real lessons - the ones you only learn by shipping something people actually use.

## The Idea

I wanted an app that:
- Works completely offline
- Respects user privacy (no cloud, no tracking)
- Helps families manage their busy lives
- Doesn't require a subscription

Simple, right? Well...

## Technical Decisions That Mattered

### Choosing React Native

I went with React Native because:
- I already knew React
- Cross-platform (iOS and Android)
- Large ecosystem
- Good performance

**Reality check:** React Native is great, but mobile development has unique challenges. Things that work on web don't always translate.

### Local-First Architecture

I chose SQLite for local storage because:
- No backend infrastructure needed
- Works offline
- Fast and reliable
- Privacy-focused

**Challenge:** Managing complex relational data locally is harder than I expected. Migrations, relationships, queries - it's all on the device.

### State Management with Zustand

I used Zustand for state management:
- Simple API
- Less boilerplate than Redux
- Good TypeScript support

**Lesson:** Start simple. You can always refactor if you need more complexity.

## What Went Well

### 1. Starting with a Clear Vision

Knowing exactly what I wanted to build helped me make consistent decisions. When I hit roadblocks, the vision guided me.

### 2. Building in Public (Sort Of)

Sharing progress on GitHub and getting feedback early helped catch issues before they became problems.

### 3. Focusing on Core Features First

I didn't try to build everything at once. Calendar, tasks, meal planning - one at a time, fully functional before moving on.

## What Was Harder Than Expected

### 1. Mobile-Specific Challenges

- **Keyboard handling** - iOS and Android handle keyboards differently
- **Navigation** - Mobile navigation patterns are different from web
- **Performance** - Mobile devices have less memory and processing power
- **Testing** - Need physical devices, not just browsers

### 2. Data Modeling

Family data is complex:
- Recurring events (birthdays, weekly activities)
- Relationships (who's related to whom)
- Shared vs. personal data
- Sync conflicts (when multiple devices exist)

I spent more time on data modeling than I expected.

### 3. User Experience

What seems obvious to me isn't obvious to users. I had to:
- Simplify workflows
- Add more guidance
- Handle edge cases I didn't anticipate
- Make it work for different family structures

## Key Lessons

### 1. Ship Early, Iterate Often

I could have polished forever. Getting it into TestFlight and getting real feedback was invaluable.

### 2. Documentation Matters

Even for a solo project, writing down decisions and architecture helps. Future you will thank present you.

### 3. Testing on Real Devices

Simulators are great, but real devices reveal issues you'd never catch otherwise.

### 4. Privacy is a Feature

Users appreciate not having their data in the cloud. It's a selling point, not a limitation.

### 5. Local-First is Complex

Offline-first apps are harder than I thought. But the user experience is worth it.

## What I'd Do Differently

1. **Plan data migrations earlier** - Schema changes are painful
2. **More user testing** - Earlier and more often
3. **Better error handling** - Graceful degradation is important
4. **Performance profiling** - Should have done this earlier

## Advice for First-Time Mobile Developers

1. **Start simple** - Your first app doesn't need to be perfect
2. **Test on real devices** - Early and often
3. **Handle offline gracefully** - Mobile networks are unreliable
4. **Respect platform conventions** - iOS and Android users expect different things
5. **Get feedback early** - Don't wait until it's "done"

## The Reality of Solo Development

Building an app solo means:
- You're the designer, developer, tester, and product manager
- Decisions are faster, but you have no one to bounce ideas off
- You learn a lot, but it's exhausting
- Shipping feels amazing, but maintenance is ongoing

## Conclusion

Building homebase taught me that shipping software is about more than writing code. It's about making decisions, handling trade-offs, and learning from mistakes. The technical skills matter, but so does product thinking, user empathy, and persistence.

If you're thinking about building your first app: do it. Start small, learn as you go, and don't wait for it to be perfect. The lessons you'll learn are worth more than any tutorial.`,

      8: `# Why I'm Pursuing Cloud Development & Operations

After completing my Honours Bachelor of Computer Science, I had a choice: jump into the job market or continue learning. I chose to pursue a Graduate Certificate in Cloud Development & Operations. Here's why.

## The Shift to Cloud

The industry has shifted. Most software runs in the cloud now. Understanding cloud infrastructure isn't optional anymore - it's essential. Whether you're deploying a React app or building microservices, cloud knowledge is expected.

## What I Want to Learn

### Infrastructure as Code

I want to understand how to define infrastructure programmatically. Tools like Terraform and CloudFormation let you version control your infrastructure, which is powerful.

### Containerization

Docker and Kubernetes are everywhere. Understanding containers and orchestration opens up deployment options and makes applications more portable.

### CI/CD Pipelines

Automating testing and deployment is crucial for modern development. I want to build robust pipelines that catch issues early and deploy confidently.

### Cloud Security

Security in the cloud is different from on-premises. I need to understand best practices, IAM, network security, and compliance.

### Cost Optimization

Cloud services cost money. Learning to optimize costs while maintaining performance is a valuable skill.

## Career Opportunities

Cloud skills are in high demand. Companies are:
- Migrating to the cloud
- Building cloud-native applications
- Needing cloud engineers

This specialization positions me well for the job market.

## My Background

I've built full-stack applications, but I've mostly deployed to simple hosting. I want to understand:
- How to scale applications
- How to handle high availability
- How to monitor and maintain production systems
- How to design for the cloud

## The Practical Benefits

Beyond career opportunities, cloud knowledge helps me:
- **Build better projects** - Deploy more sophisticated applications
- **Understand system design** - Think about scalability and reliability
- **Collaborate better** - Speak the language of DevOps and infrastructure
- **Solve problems** - Debug production issues more effectively

## My Learning Approach

I'm not just taking courses - I'm:
- Building projects that use cloud services
- Experimenting with different cloud providers
- Reading about real-world architectures
- Contributing to open-source cloud projects

Theory is important, but hands-on experience is where real learning happens.

## The Future of Software Engineering

Software engineering is evolving. The line between development and operations is blurring. Full-stack developers need to understand:
- How their code runs in production
- How to monitor and debug live systems
- How to design for scale
- How to work with infrastructure teams

Cloud development & operations isn't a separate field - it's becoming part of being a well-rounded software engineer.

## Conclusion

I'm pursuing cloud development & operations because I want to be a complete software engineer. Not just someone who writes code, but someone who understands how that code runs, scales, and serves users in production.

The cloud is the present and future of software. Learning it now positions me to contribute meaningfully to modern software teams and build applications that can scale.

Plus, it's genuinely interesting. The challenges of distributed systems, the elegance of infrastructure as code, the satisfaction of a well-designed deployment pipeline - this is the kind of engineering I want to do.`,

      9: `# From Call of Duty to Code: How Running an Esports Org Shaped My Software Engineering Approach

You might not think competitive gaming and software engineering have much in common. But after running a professional Call of Duty organization for years, I've discovered the parallels are everywhere. The skills I learned managing esports teams directly translate to collaborating on code, leading projects, and working effectively in software engineering teams.

## The Unexpected Connection

When I tell people I used to run a competitive gaming organization, they're often surprised. But here's the thing: managing a team of competitive players, coordinating tournaments, handling strategy, and maintaining team chemistry taught me skills that are incredibly valuable in software development.

## Lesson 1: Clear Communication Under Pressure

In competitive Call of Duty, communication is everything. During intense matches, you have seconds to:
- Call out enemy positions
- Coordinate team movements
- Adjust strategy mid-game
- Keep morale high when things go wrong

**How it translates to software engineering:**

- **Code reviews** - Giving clear, constructive feedback quickly
- **Stand-ups** - Communicating blockers and progress effectively
- **Pair programming** - Explaining your thought process in real-time
- **Incident response** - Staying calm and communicating clearly when production is down

The pressure of a tournament match isn't that different from a production outage. Both require clear thinking, quick decisions, and effective communication.

## Lesson 2: Strategy and Planning

Running an esports organization meant:
- Analyzing opponents' playstyles
- Developing counter-strategies
- Planning practice schedules
- Managing resources (time, equipment, travel)

**How it translates:**

- **System design** - Thinking through architecture before coding
- **Sprint planning** - Breaking down features into manageable tasks
- **Technical debt** - Knowing when to refactor vs. ship quickly
- **Performance optimization** - Identifying bottlenecks and addressing them strategically

Just like in gaming, you can't just "wing it" in software. Good planning prevents problems later.

## Lesson 3: Building and Maintaining Team Chemistry

The hardest part of running a gaming organization wasn't the gameplay - it was managing people. Different personalities, skill levels, and motivations all had to work together.

**Key challenges:**
- Balancing individual egos with team goals
- Handling conflicts constructively
- Recognizing when someone isn't a good fit
- Keeping the team motivated through losses

**How it translates to software teams:**

- **Code ownership** - Balancing individual contributions with collective codebase health
- **Code reviews** - Giving feedback that improves code without demotivating developers
- **Onboarding** - Helping new team members integrate smoothly
- **Team dynamics** - Creating an environment where everyone can contribute their best work

The best code comes from teams that work well together, not just teams with the most talented individuals.

## Lesson 4: Performance Under Pressure

Competitive gaming is all about performing when it matters. You can practice perfectly, but tournaments are different. The pressure is real, the stakes are high, and mistakes are costly.

**How it translates:**

- **Production deployments** - Staying calm and focused during critical releases
- **Debugging under deadlines** - Finding bugs efficiently when time is limited
- **Technical interviews** - Thinking clearly when being evaluated
- **Client presentations** - Communicating technical concepts confidently

The ability to perform under pressure is a skill, and competitive gaming gave me lots of practice.

## Lesson 5: Continuous Improvement and Adaptation

In esports, the meta (optimal strategies) changes constantly. What worked last month might be obsolete now. Successful teams adapt quickly.

**How it translates:**

- **Learning new technologies** - Staying current with evolving tools and frameworks
- **Refactoring** - Improving code as you learn better patterns
- **Process improvement** - Adapting workflows based on what works
- **Embracing change** - Not getting attached to outdated solutions

The tech industry moves fast. The ability to adapt quickly is essential.

## Lesson 6: Data-Driven Decision Making

We analyzed gameplay footage, tracked statistics, and used data to improve. "We think this works" wasn't good enough - we needed evidence.

**How it translates:**

- **Performance metrics** - Using data to identify bottlenecks
- **A/B testing** - Making decisions based on user behavior, not assumptions
- **Code quality metrics** - Measuring technical debt and code health
- **User feedback** - Listening to what users actually need, not what we think they need

Data beats opinions, in gaming and in software.

## Lesson 7: Leadership Without Authority

As an org founder, I had to lead players who were often better at the game than me. I couldn't rely on authority - I had to earn respect through:
- Clear communication
- Good decision-making
- Supporting the team
- Taking responsibility for failures

**How it translates:**

- **Technical leadership** - Influencing through expertise, not hierarchy
- **Mentoring** - Helping others grow without being their manager
- **Code reviews** - Leading by example with thoughtful feedback
- **Cross-functional collaboration** - Working with designers, PMs, and stakeholders

The best software engineers lead through influence, not authority.

## The Fun Part: What Gaming Taught Me About Collaboration

### 1. Everyone Has a Role

In Call of Duty, you need:
- Someone who calls the shots (strategy)
- Someone who executes (mechanics)
- Someone who supports (team play)
- Someone who adapts (flexibility)

Software teams need the same diversity:
- Architects who design systems
- Developers who write code
- DevOps who maintain infrastructure
- QA who ensure quality

No role is more important - they're all essential.

### 2. Failure is Information

In gaming, every loss teaches you something. The best teams analyze failures, learn from them, and come back stronger.

In software:
- **Bugs** - Tell you where your assumptions were wrong
- **Failed deployments** - Reveal gaps in your process
- **Code reviews** - Show you different approaches
- **User complaints** - Highlight what actually matters

Failure isn't the opposite of success - it's part of the path to success.

### 3. Practice Makes Permanent

In gaming, bad habits are hard to break. The same applies to code:
- **Code style** - Consistent patterns make code readable
- **Testing** - Good habits prevent bugs
- **Documentation** - Writing it becomes natural with practice
- **Code reviews** - Regular practice improves your feedback skills

## My Take: Why This Matters

When I interview for software engineering roles, I talk about my esports experience. Not because it's quirky, but because it demonstrates:
- **Leadership experience** - I've managed teams and projects
- **Performance under pressure** - I can deliver when it matters
- **Communication skills** - I know how to work with diverse teams
- **Strategic thinking** - I plan before I execute
- **Adaptability** - I'm comfortable with change

These aren't "soft skills" - they're essential engineering skills. The best code is written by teams that communicate well, plan effectively, and work together smoothly.

## The Bottom Line

Running a competitive gaming organization wasn't just fun (though it was that too). It was a crash course in:
- Team leadership
- Strategic planning
- Performance optimization
- Conflict resolution
- Data-driven decisions

All of which are directly applicable to software engineering.

So when someone asks how my gaming background relates to coding, I tell them: it taught me that building great software, like winning tournaments, is about more than individual skill. It's about communication, strategy, teamwork, and continuous improvement.

And honestly? The pressure of a production deployment feels a lot less stressful after managing a tournament match with hundreds of viewers. If I can stay calm and communicate clearly when the stakes are that high, I can handle anything software engineering throws at me.

## Conclusion

Your background doesn't have to be "traditional" to be valuable. The skills I learned in esports - leadership, communication, strategy, teamwork - are exactly what make me effective as a software engineer. Whether you're managing a gaming team or a development team, the principles are the same: clear communication, strategic thinking, and a focus on continuous improvement.

The next time someone dismisses gaming as "just playing video games," remember: competitive gaming is a training ground for skills that translate directly to professional success. And if you've ever led a team, managed a project, or worked under pressure, you have valuable experience - no matter where you got it.`
    }
    return contentMap[postId] || 'Content coming soon...'
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
      />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-slate-50 via-indigo-50/20 to-teal-50/20 py-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 break-words px-2">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-indigo-50 to-teal-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 sm:py-12" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="article-content"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {renderMarkdown(getPostContent(post.id))}
          </motion.div>
        </div>
      </article>
    </div>
  )
}

export default BlogPostPage
