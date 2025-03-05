## Homework: Next.js + APIs

Expected Website: [https://www.cs392.buspark.io/](https://www.cs392.buspark.io/)

Due Date: Check Gradescope for updates.


## Background

You will build a small “news” website for Space related news. The news articles are sources from a public API. You will need to query this API and display the data in various formats. This will build on everything we have learned so far.

You have been provided the starter code for this assignment but you will need to write a large portion of this code yourself. This assignment will take a considerable amount of time — start early!

Starter Code: Accept assignment here

To build this, you will use Next.js, Antd(Design Library), and a public API.

## API

The API docs can be found here: [https://api.spaceflightnewsapi.net/v4/docs/](https://api.spaceflightnewsapi.net/v4/docs/)

More API doc: [https://github.com/TheSpaceDevs/Tutorials/blob/main/faqs/faq_SNAPI.md](https://github.com/TheSpaceDevs/Tutorials/blob/main/faqs/faq_SNAPI.md)

The URL for the API itself is simply [https://api.spaceflightnewsapi.net/v4/](https://api.spaceflightnewsapi.net/v4/)

You will only need the ```/v4/articles/``` route for this project.

## Antd

You will make heavy use of Antd for this assignment. It is a component library that offers you many prebuilt UI components. It makes building things a lot easier! You will need to read their docs for each component that you want to use. Don’t forget to check the “API” section as a reference at the bottom of each page for each component.

Link: [https://ant.design/](https://ant.design/)

Documentation: [https://ant.design/components/overview/](https://ant.design/components/overview/)

__Note:__ You can get a sense of which Antd components WE used in our solution by checking the ‘```import```’ statements in a component’s file! You can do your own thing if you like, but feel free to infer our solution.

## Styling

In general, you should not need that many styles for this assignment. That being said, you will still need some. You are welcome to implement styles however you want. This includes[in no particular order]:

- Inline styles use styles={{}} (Our recommendation)
- Global CSS styling
- CSS modules(Best choice for larger applications but you don’t need to use it right now)

You might want to look at Flexbox for some of your styling as a way to achieve the desired result.

## Typescript

We’re using Typescript in this project. Most of the work is done for you, for example, we defined the types from the API for you! Most components have them already defined as well, only one requires you to write the interface (ie props).

## Code Tour

We have provided you with several files. We summarize them here:

- ```/src/assets/404.png``` a file you can use to render images when they’re not found
- ```/src/pages/index.tsx``` Home page
- ```/src/pages/news/index.tsx``` News Page
- ```/src/layout/layout.tsx``` Contains the layout for the website. This is used throughout the website and is what provides the consistent layout for the site(header, body, footer etc).
- ```/src/layout/header.tsx``` Contains the definition of the header, it will contain the Menu code you will need to write. It is used in the layout.tsx file
- ```/src/components/ArticleCard.tsx``` This is a component you will build, it represents a single article
- ```/src/components/ArticleList.tsx``` Another component you will build. It displays a list of articles in a grid format.
- ```/src/components/ArticleTable.tsx``` Another component you will build. It displays a table of articles(Think spreadsheet).
- ```/src/components/ArticleStatistics.tsx``` A component you will build, displays summary statistics about a particular set of articles.
- ```/src/types/types.ts``` These are types we have provided for you. They match the response from the API. They add typings to your JSON responses from the API. Use them!

## Tasks(These are written in the recommended order)

1. Add the about page, write anything you want in it.
1. Implement the Menu in the /src/layout/header.tsx so that it has three links
   1. Links:
      1. Home
      1. News
      1. About
   1. There are several provided functions in this file. Use them as is the Menu component. They will make it function correctly.
1. Implement the footer of the website
1. Implement a useEffect in the news page to communicate with the API as needed to get the list of articles. Start with a page size of 10 hard-coded and offset=0
   1. __Required:__ Always retrieve articles starting with the newest first(ie descending order)
   1. __Tip:__ Don’t forget about useState
   1. __Tip:__ Read the “docs” of the API to learn about the fields you need to use to get the information you want.
1. Implement the ```ArticleCard``` component
   1. __Required__ Features:
      1. Should look exactly the same(or nearly so) as the provided example on the website
      1. Render a ```404``` fallback image when the image provided by the API does not exist
      1. When you click (anywhere on the card) it should navigate you to the article itself (on an external website).
      1. It should have a “hover” feature (Tip: don’t do this in CSS…there is an easier way)
   1. __Tip:__ You can test it without displaying a list. You can hardcode which item from the the list of articles and display it somewhere to make sure your component works.
   1. __Tip:__ Don’t forget to format the date into something human readable
   1. __Important:__ Don’t forget to add a fallback image. Sometimes the image provided by the API does not exist. You should display the 404 image we gave you when this happens. There are a few ways of doing this but using onError is the easiest. Google is your friend.
1. Implement the ```ArticleList``` component
1. Add the ```ArtlistList``` to the news page
1. Implement the ```ArticleTable``` component
   1. __Tip:__ It uses the same data as ArticleList but displays it in a different format
   1. __Tip:__ Don’t forget to format the date into something human readable
1. Add a way for the user to switch between the the grid view of of ArticleList and the table view of ArticleTable. The Switch component from Antd might be helpful.
1. Now that you can switch between the two views, add pagination. Pagination is the term used for navigating between different pages of the API response and displaying them to the user.
   1. See the demo website for the features that pagination should have
   1. __Required:__ Scroll to the top when the user changes the current page or number of items on a page.
   1. __Tip:__ Make sure you don’t have duplicate pagination when the table is displaying.
   1. __Tip:__ Don’t build this yourself! Look on Antd for something pre-built that can help you!
   1. __Tip:__ You might need to add stuff to your API request/query to make this work.
   1. __Tip:__ Watch out for off-by-one errors on this one
1. Implement the ```ArticleStatistics``` component and add it to the News page.
   1. __Tip:__ Do not call the API again for this component. Use the data that you already retrieved for other components.

## Bonus Task

Each of these tasks will give you a 5% bonus on the total score you receive on this assignment(allowing >100% grades, excluding other bonuses). You can complete both for a total bonus of 10%.

1. Add the “Latest Article” feature to the home page. See deployed website for all the features needed. Build it as closely as possible to the example.
1. Add a search feature to the News page. This should use the API to perform the search query and display the results. No example is given, use your imagination
   * You must write a new component for this feature
     
