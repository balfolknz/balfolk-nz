# Balfolk NZ website
To make this website as scalable, but simple to use as possible, I'll be leveraging the services of other platforms.

1. The website itself will be custom made using NextJS. NextJS will provide optimal performance but also easy scaling. <br>
   I'll also be able to connect it to a backend easily later if we want to do more complicated feature
    1. E.g. Blog section, authentication/accounts, automatic emails, payment systems etc.
    2. These features will require some server side processing, and a database. To host a database, it won't be free so we'll exclude this for now
2. Dropbox will be used to store all the photos we take, and a select few will be copied into this repository to display on the website
    1. A naming convention and proper folder structure should be followed in case we want to change the website's images easily
3. Youtube will be used to store all the videos
    1. Let them handle the performance and scaling of massive videos
    2. Again, a proper naming convention and playlist structure should be followed
    3. It also won't compress the video quality as much
    4. We'll simply add links to different playlists on the website, and use IFrames to showcase our top videos
4. Google Drive can be used to store textual content about the website
    1. We could hook this up to a CMS like Sanity or Contentful, but that'll require a separate login and could be too complicated for people who aren't used to CMS
    2. It's also unlikely that the data will change often, and a folder structure is easier to build in Google Drive
    3. Then, we just use a JSON document in the repo to generate each component based on what info's in the JSON document. 


Each section will have
1. About us
2. Class times
3. Contact
4. Photos
5. Exemplar dances/performances