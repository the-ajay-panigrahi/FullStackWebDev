# **`General Questions`**

## 1) How does a website work and what are its key components?

###  **`What Happens When You Visit a Website?`**
#### **`The Client (You)`**:
- **Question**: What happens when you open a browser and enter a URL?
- **Explanation**: You open your browser and enter a URL (e.g., "www.example.com"). This starts the process of loading the website.

#### **`Browser Sends Request`**:
- **Question**: What does your browser do after you enter a URL?
- **Explanation**: The browser sends a request to the server asking for the content of the webpage.

#### **`Server Processes Request`**:
- **Question**: What happens when the server receives your request?
- **Explanation**: The server looks for the requested page, possibly interacts with a database (for dynamic content), and sends back the HTML, CSS, JavaScript, and other necessary files to the browser.

#### **`Browser Displays Content`**:
- **Question**: How does the browser display the webpage after receiving the files?
- **Explanation**: The browser processes the HTML to build the structure of the page, applies CSS for styling, and runs JavaScript for interactivity. The page is then displayed for you to see and interact with.

#### **`User Interactions`**:
- **Question**: What happens if you interact with the webpage (click a button or submit a form)?
- **Explanation**: If you interact with the page (like clicking a button or submitting a form), the browser may send additional requests to the server. The backend processes those requests and sends back new data or updates the page accordingly.

### **`Key Components of a website`**

- **Client**: Your device (browser), requesting data.
- **Server**: A computer that stores and provides data in response to requests.
- **Browser**: The software that displays the website (frontend).
- **Frontend**: What you see on the website (HTML, CSS, JavaScript).
- **Backend**: The server-side components that manage data, processes, and logic (server code, databases).

---

This is how the entire process works: the client sends requests to the server, which processes the requests and sends data back. The browser then displays the content, and you can interact with the page, which may lead to more requests being processed in the backend.


## 2) What is `SEO`?

**`SEO (Search Engine Optimization)`** is the process of improving a website's visibility in search engine results to attract more organic traffic. It involves optimizing content, structure, and technical elements.

## 3) What is `Lighthouse`?

**`Lighthouse`** is an open-source tool by Google that analyzes and improves the quality of web pages. It provides insights on performance, accessibility, SEO, and more to help optimize websites.

## 4) What are `Core Web Vitals`?

**`Core Web Vitals`** are three key metrics used by Google to measure webpage performance and user experience. They directly impact search rankings and user satisfaction.

These are the 3 key Core Web Vital metrics:

- **`Largest Contentful Paint (LCP)`**: Measures the time taken for the main content to load. A good LCP score is 2.5 seconds or less, ensuring faster load times and a better user experience.

- **`Cumulative Layout Shift (CLS)`**: Tracks unexpected layout shifts during page load. A low CLS score means the page is stable, preventing frustrating jumps in content.

- **`Interaction to Next Paint (INP)`**: Evaluates how responsive a page is to user interactions, like clicks or taps. A low INP score ensures quick responses, enhancing usability.

**Optimizing these metrics improves user experience, reduces bounce rates, and boosts search rankings.**

## 5) What is `SVG`?

**`SVG(Scalable Vector Graphics)`** is an image format made from shapes and lines, not pixels like PNGs or JPGs. This means SVGs can be resized to any size without losing quality. They are lightweight, flexible, and easy to style or animate, making them ideal for responsive web design.


# **`HyperText Markup Language (HTML)`**

what is html
Basic Structure of html
Element vs Tag
id classes
inline vs block elements
semanitic html
html entities

## ) What is the `poster` attribute in HTML?

The **`poster`** attribute specifies an image to be displayed before a video starts playing, providing a preview of the video content.

## ) What is the `preload` attribute in HTML?

The **`preload`** attribute specifies how the audio file should be loaded when the page loads. It can have the following values:

- **`none`**: No preloading, the audio loads only when the user starts playback.
- **`metadata`**: Only the metadata (duration, info) is preloaded.
- **`auto`**: The entire audio file is preloaded in the background for faster playback.

# **`Cascading Style Sheet (CSS)`**
what is css?
3 ways to add css
css selector
css box model
box-sizing
margin collapse
cascade algo - specificity