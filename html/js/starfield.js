var StarField=function (canvas_id, width, height, num_stars, star_size, stars) {

  canvas = document.getElementById(canvas_id);
  ctx = canvas.getContext('2d');

  width = width ? width : canvas.width,
  star_size = star_size ? star_size : 2,
  height = height ? height : canvas.height,
  origin_x = width / 2,
  origin_y = height / 2,
  num_stars = num_stars ? num_stars : 80;
      
//   this.stars = [];
  create_star=function () {
    star = {};
    star.x = Math.random() * width - origin_x;
    star.y = Math.random() * height - origin_y;
    star.z = star.max_depth = Math.max(width, height);
    star.size=star_size;
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
    // rates of change
    star.ddx = Math.random() * star.dx;
    star.ddy = Math.random() * star.dy;
    star.width = 1;
    return star;
  }
  
  move=function (star) {
    star.x += star.dx;
    star.y += star.dy;
    star.z += star.dz;    
    star.dx += star.ddx;
    star.dy += star.ddy;
    star.width = 1 + ((star.max_depth - star.z) * .1);
  }
  
  update_stars=function (ctx, stars) {
    ctx.fillStyle = '#fff';
    for (var i = 0; i < stars.length; i++) {
      move(stars[i]);
      if (stars[i].x < -origin_x || stars[i].x > origin_x ||
          stars[i].y < -origin_y || stars[i].y > origin_y) {
        // remove
        stars[i] = create_star();
      }
      else {
        var circle = new Path2D();
        circle.moveTo(stars[i].x + origin_x, stars[i].y + origin_y);
        circle.arc(stars[i].x + origin_x, stars[i].y + origin_y, stars[i].size, 0, 2 * Math.PI);
        ctx.fill(circle);
      }
    }
  }
  
  // drawing routine
  this.draw = function() {
//     ctx.fillStyle = "#fff";
//     ctx.fillRect(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);
      
    update_stars(ctx, stars);
    t = setTimeout("draw()", 30);
  }
  
  for (var i=0; i < num_stars; i++) {
    stars.push(create_star());
  }
  return this;
}
 
