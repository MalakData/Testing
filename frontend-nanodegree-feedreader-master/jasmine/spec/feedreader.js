/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */ 
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        //asynchronous so this test will require the use of Jasmine's
        beforeEach(function () {
            console.log("is running");
        })
        // test allFeeds variable has been defined
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* that is  test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it(' URL defined and that the URL is not empty defined',function(){
             allFeeds.forEach(feed => {
                 expect(feed.hasOwnProperty("url")).toBe(true);
                 expect(feed.url).not.toBe('');
             })
            
         })

        /*  test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined and that the name is not empty',function (){
            allFeeds.forEach(feed =>{
                expect(feed.hasOwnProperty("name")).toBe(true);
                expect(feed.name).not.toBe('');
            })
            
        })
    });


    /*  new test suite  */
        describe("The Menu",function () {
        /*  test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it("menu element is hidden by default",function () {
            expect(document.body.className).toBe("menu-hidden");
            // jQuery
          expect($('body').hasClass('menu-hidden')).toBe(true)
           
         })

         /* test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
            it("changes visibility when the menu icon is clicked",function () {
                //link new verb with body class
            let linkBodyClass=document.body.className;
                // test click icon visibility
            let MenuButton=$('.menu-icon-link');
            MenuButton.click();
                //get the menu hiddn whan click again 
            hiddnMenu=document.body.className;
                //compuer ensuer not equal 
            expect(hiddnMenu).not.toBe(linkBodyClass);
               //click again
            MenuButton.click();
               //check 
            expect($('body').hasClass('menu-hidden')).toBe(true)
         })
        });
    /* new test suite  */
      describe("Initial Entries",function () {
         
        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      beforeEach(function (done) {
        loadFeed(1, function () {
            done();
            
        });
          
      })
      it("at least a single entry element within the feed container",function (done) {
          expect($(".feed .entry").length).toBeGreaterThan(0);
          done();
          
      })
    });
    /*  new test suite  */
     describe("New Feed Selection",function () {
         
        /*  test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let feedAfterFirstLoad;
        let feedAfterSecondLoad;

        beforeEach(function(done){
        loadFeed(0, function () {
       // great place to get content of feed container
       expect(allFeeds.length).not.toBe(0);
        loadFeed(1, function () {
         // get content of feed container again
         expect(allFeeds.length).not.toBe(0);
         done();
     })
  })
})
// implement it() block here
it("new feed is loaded",function () {
    expect(loadFeed).toBeDefined();
})
    });
}());
