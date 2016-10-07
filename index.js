'use strict'
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
    const $ = require("jquery")(window);

    $('body').on('show.bs.modal', function (e) {
      console.log('show.bs.modal')
    });

    $('body').on('hide.bs.modal', function (e) {
      console.log('hide.bs.modal')
    });

    $('body').on('show', function (e) {
      console.log('show')
    });

    $('body').on('hide', function (e) {
      console.log('hide')
    });

    console.log('\ntriggering show...')
    $('body').trigger('show')

    console.log('\ntriggering hide...')
    $('body').trigger('hide')

    console.log('\ntriggering show.bs.modal...')
    $('body').trigger('show.bs.modal')

    console.log('\ntriggering hide.bs.modal...')
    $('body').trigger('hide.bs.modal')
});
