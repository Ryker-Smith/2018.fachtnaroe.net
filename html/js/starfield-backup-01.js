function StarField(canvas_id, width, height, num_stars) {
  var width = width ? width : 800,
      height = height ? height : 600,
      origin_x = width / 2,
      origin_y = height / 2,
      stars = [],
      num_stars = num_stars ? num_stars : 80,
      canvas_id = canvas_id;
  
  function create_star() {
    var star = {};
    star.x = Math.random() * width - origin_x;
    star.y = Math.random() * height - origin_y;
    star.z = star.max_depth = Math.max(width, height);

    var xcoeff = star.x > 0 ? 1 : -1;
    var ycoeff = star.y > 0 ? 1 : -1;
    
    if (Math.abs(star.x) > Math.abs(star.y)) {
      star.dx = 1.0;
      star.dy = Math.abs(star.y / star.x);
    } else {
      star.dx = Math.abs(star.x / star.y);
      star.dy = 1.0;
    }

    star.dx *= xcoeff;
    star.dy *= ycoeff;
    star.dz = -1;

    star.ddx = .1 * star.dx;
    star.ddy = .1 * star.dy;
    
    star.width = 2;
    return star;
  }
  
  function move(star) {
    star.x += star.dx;
    star.y += star.dy;
    star.z += star.dz;
    
    star.dx += star.ddx;
    star.dy += star.ddy;
    
    star.width = 2 + ((star.max_depth - star.z) * .1);
  }
  
  function update_stars(ctx) {
    ctx.fillStyle = '#fff';
    for (var i = 0; i < stars.length; i++) {
      move(stars[i]);
      if (stars[i].x < -origin_x || stars[i].x > origin_x ||
          stars[i].y < -origin_y || stars[i].y > origin_y) {
        // remove
        stars[i] = create_star();
      } else {
        ctx.fillRect(
          stars[i].x + origin_x,
          stars[i].y + origin_y,
          stars[i].width,
          stars[i].width
        );
      }
    }
  }
  
  // drawing routine
  this.draw = function() {
    // fill game board black
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    update_stars(ctx);
    
    // calculate timeout using level
    t = setTimeout("draw()", 30);
  }
  
  for (var i=0; i < num_stars; i++) {
    stars.push(create_star());
  }

  var canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext('2d');

  return this;
}
 
