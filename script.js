let images = [
    'https://img1.pnghut.com/22/6/15/u60rvNupvT/cartoon-action-figure-boss-baby-tshirt-animation.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuivUcO7ShP8qmr_1_BCggqcGTPI1p204t0NOrCSwLaDbczv2khzc3Yxc1kKPd0WDz6U&usqp=CAU',
    'https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6',
    'https://lh3.googleusercontent.com/proxy/UCntE8KpY0V0dICJDDBEKX4zU6zijJ3PYsyYc4ey2OWmmO_HVsY5wHt9RnKsMZnEH0m0tAm9YUpcfh-bxeKjI11S0VkaiegvMxhbk-A',
    'https://cdn2.vectorstock.com/i/1000x1000/45/76/cute-grandmother-cartoon-vector-17814576.jpg'
]
let names = [
    'Ulhas Pethkar',
    'Priya Pethkar',
    'Arushi Pethkar',
    'Ram Pethkar',
    'Neela Pethkar'
]
i = 0;
k = 0;
function next() {
    document.getElementById('img').src=images[i];
    i++;
    if(i == 5){
        i = 0;
    }
    document.getElementById('name').innerHTML=names[k];
    k++;
    if(k == 5){
        k = 0;
    }
}