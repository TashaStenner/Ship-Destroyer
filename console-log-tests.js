class ship {
    constructor(type, points, hitPoints){
    this.type = type;
    this.points = points;
    this.hitPoints = hitPoints;
    this.isAlive = true;
}
    takesDamage(hit){
        return this.points = this.points - hit;
    }

    dies(){
        return this.isAlive = false;
    }
    
}

class Mothership extends ship{
constructor(type, Points, hitPoints){
    super(type, Points, hitPoints);
    
} 

allDie(){
    alert("game ends");
}
}

const mothership = new Mothership ("mothership", 100 , 9);
const defenseship = new ship ("defenseship" , 80 , 10);
const attackship = new ship ("attackship" , 45 , 12);


    // document.getElementById("mothership").innerHTML += mothership.points;
    mothership.points = mothership.takesDamage(mothership.hitPoints);
    console.log(mothership.points)
    mothership.points = mothership.takesDamage(mothership.hitPoints);
    console.log(mothership.points)
    mothership.points = mothership.takesDamage(mothership.hitPoints);
    console.log(mothership.points)
    mothership.points = mothership.takesDamage(mothership.hitPoints);
    console.log(mothership.points)