**Steam Friends List Visualizer**

**What does this do?**

This is a project that makes use of Steams API to create a visual map of your friends and the friends of their friends and so on. With a max of 3 degrees of separation, you can look at your friends list on Steam and see how your friends links with all the other Steam user nodes in the network.

**How does it work?**

Using Steams API, it makes recursive promises (callback hell) through your friends list and then the friends list of everyone on that list. It then maps out a list of nodes and links and then sends off that JSON format of nodes and links to D3 (Data Driven Documents). Using this, you can visualize the JSON list of nodes and links.

**Why did I build this?**

I got curious one day and decided to check Steam and was combing through my friends list and I discovered an interesting pattern. If you look at everyone in your friends list, find the one with the highest steam level. Then check that persons friends list. Repeat this pattern and what you will find is that you will continually find higher and higher steam level users until you reach the person with the highest rank in the entire network of Steam. I theorize that people who play a lot of games tend to play a lot with other players. Another thing I found out was that people with higher steam levels are rewarded with a higher cap of friends. This means that as you go up in steam level, the higher the chance of there being more friends in that group.
