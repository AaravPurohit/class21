function isTouching(moving,rest){
    if(moving.x-rest.x<moving.width/2+rest.width/2&&
        rest.x-moving.x<moving.width/2+rest.width/2&&
        moving.y-rest.y<moving.height/2+rest.height/2&&
        rest.y-moving.y<moving.height/2+rest.height/2){
        return true;
        }
        else{
            return false;
        }
}