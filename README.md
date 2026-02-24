## Answers to Questions :

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
* **getElementById:** Selects a single, specific HTML element based on its unique `id` attribute. It is very fast but only returns one element.
* **getElementsByClassName:** Selects all HTML elements that share a specific class name. It returns a live "HTMLCollection" of elements, meaning if the DOM changes, this list updates automatically.
* **querySelector:** Selects the *first* element that matches a given CSS selector . It is very flexible but only returns one item.
* **querySelectorAll:** Selects *all* elements that match a given CSS selector. It returns a static "NodeList" that does not automatically update if the DOM changes later.

### 2. How do you create and insert a new element into the DOM?
1.  **Create:** Use `document.createElement('tagName')` to create the new element in memory. You can then add text to it using `.innerText` or classes using `.classList.add()`.
2.  **Insert:** Use methods like `parentElement.appendChild(newElement)` to add it to the end of a parent element, or `parentElement.prepend(newElement)` to add it to the beginning.

### 3. What is Event Bubbling? And how does it work?
Event bubbling is how events travel through the DOM. When an event happens on an element like clicking a button, that event first triggers on the button itself. Then, it "bubbles up" to the button's parent element, then the grandparent, all the way up to the `document` root. It works like a bubble rising to the surface of water.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique that takes advantage of **Event Bubbling**. Instead of attaching an event listener to many individual child elements , you attach a *single* event listener to their common parent container. 
**Why it is useful:** * It saves memory and improves performance because you only have one listener instead of many.
* It automatically handles dynamically added elements. If we add a new job card later, we don't need to write new code to attach a listener to it; the parent container already handles it.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
* **preventDefault():** Stops the browser from performing its default action for that event. For example, it stops a form from refreshing the page when submitted, or stops a link from navigating to a new page.
* **stopPropagation():** Stops the event from "bubbling up" the DOM tree. It ensures that the event triggers on the target element but prevents parent elements from hearing about the event and triggering their own listeners.