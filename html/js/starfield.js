var StarField=function (canvas_id, width, height, num_stars, star_size, starImage) {
//   stars=stars_list;
  canvas = document.getElementById(canvas_id);
  ctx = canvas.getContext('2d');

  width = width ? width : canvas.width,
  star_size = star_size ? star_size : 2,
  height = height ? height : canvas.height,
  origin_x = width / 2,
  origin_y = height / 2,
  num_stars = num_stars ? num_stars : 10;
      
  create_star=function (canvas_id, starImage) {
    star = {};
    star.x = Math.random() * width - origin_x;
    star.y = Math.random() * height - origin_y;
    star.z = star.max_depth = Math.max(width, height);
    star.size=star_size;
    star.canvas_id=canvas_id;
    star.image=starImage;
    star.iteration=0;
    var xcoeff = star.x > 0 ? .1 : -.1;
    var ycoeff = star.y > 0 ? .1 : -.1;
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
    star.width = 1+ ((star.max_depth - star.z) * .1);
    star.iteration++;
//     console.log(star.width);
  }
  
  function update_stars (ctx) {

    ctx.fillStyle = '#fff';
    for (var i = 0; i < stars.length; i++) {
      this.move(stars[i]);
      if (stars[i].x < -origin_x || stars[i].x > origin_x ||
          stars[i].y < -origin_y || stars[i].y > origin_y) {
        // remove
        stars[i] = this.create_star(
                        stars[i].canvas_id,
                        stars[i].image
                    );
      }
      else {
//           if (stars[i].thing.localeCompare("img")!=0) {
// //               console.log(stars[i].thing);
//             var circle = new Path2D();
//             circle.moveTo(stars[i].x + origin_x, stars[i].y + origin_y);
//             circle.arc(stars[i].x + origin_x, stars[i].y + origin_y, stars[i].size, 0, 2 * Math.PI);
//             ctx.fill(circle);
//           }
//           else {
//               console.log(stars[i].thing);
            var image=document.createElement("img");
            image.src=stars[i].image;
//             mt="canvas_middle";
//             console.log(stars[i].canvas_id);
//             if (mt.localeCompare(stars[i].canvas_id)==0) {
//                 image.src="images/rockGrey.png";
// //                 console.log("blue");
//             }
//             else {
//                 image.src="images/rockRed.png";
// //                 console.log("red");
//             }
            if (stars[i].iteration <= 3) {
                image.src="images/burstStar1.png";
            }
            ctx.drawImage(image, 0, 0, image.width, image.height, stars[i].x + origin_x, stars[i].y + origin_y,
                          (image.width * stars[i].width)/20, (image.height * stars[i].width)/20); //(stars[i].width)
//           }
      }
    }
  }
  
  // drawing routine
  this.draw = function(canvas_id) {
      canvas = document.getElementById(canvas_id);
      ctx = canvas.getContext('2d');
//     ctx.fillStyle = "#fff";
//     ctx.fillRect(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);
//       ctx.rotate(1*(Math.PI/180));
//       console.log(canvas_id, thing);
      update_stars(ctx);
    t = setTimeout(function(){draw(canvas_id)}, 30);
  }
  
  for (var i=0; i < num_stars; i++) {
    stars.push(this.create_star(canvas_id, starImage));
  }
  return this;
}
 
