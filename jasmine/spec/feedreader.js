$(function() {
    var start ,
   end;
    describe('RSS Feeds', function() {
        
    it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         
         it('URL is Defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });
/* for loop to ensures it has a name defined and that the name is not empty. */
it('name is defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    /* check The menu */

          describe("the menu", function () {

       it('the menu is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

         /* toggle click that menue appear or not  */
          it('changes visibility on click', function () {

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Initial Entries */

    describe('Initial Entries', function () {

        /*  loadFeed function */
        
         beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
                done();
            });
        });
            
it('feed container has atleast 0 entry', function () {
            expect($('.feed .entry')).toBeDefined();
        });
    });
/* search test */
   describe('New Feed Selection', function () {
/*  sure if that new feed selection is loaded */
    beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
              start  = $('.feed').find(allFeeds.url);
                done();
            });
            loadFeed(1, function () {
                end = $('.feed').find(allFeeds.url);
                done();
            }); });
    /* new feed is different */
        it('new feed is different', function () {
            expect(start).not.toBe(end);
        }); 
    });
}());
        
