describe("Tesing the Bookings function",function(){
    it("should return R135.00 for MONDAY check-ins",function(){
        var booking={
            check_in_day: 'Monday',
            duration: 3,
            cat_name : 'Snowy'
          }
          
          
        assert.equal(135.00, bookingCost(booking));



    })
    it("should return R101.25 for WEDNESDAY check-ins after discount calculations",function(){
        var booking={
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name : 'Snowy'
          }
        assert.equal(101.25, bookingCost(booking));


        
    })
    it("should return R114.75 for FRIDAY check-ins after discount calculations",function(){
        var booking={
            check_in_day: 'Friday',
            duration: 3,
            cat_name : 'Snowy'
          }
          
          
        
        assert.equal(114.75, bookingCost(booking));


        
    })
})
