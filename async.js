//queremos actualizar las tareas de un usuario como completadas en nuestra base de datos

// Callback Hell

const competartarea =(req, res) =>{
    User.findById(req.userId, (err, user)=>{
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.tasksId,(err, user)=>{
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save((err)=>{
                        if (err) {
                            return res.send(err);
                        }else {
                            res.send("Task Completed");
                        }
                    });
                }
            });
        }
    });
}



// Promesas con .then. El . them nos permitemanejarlas de manera sincronica

const completarTareas = ( req, res ) =>{
    User.findById(req.userId)
        .then((user)=>{
            return Tasks.findById(user.tasksId);
        })
        .then(()=>{
            tasks.completed = true;
            return tasks.save();
        })
        .then(()=>{
            res.send("Tasks Completed");
        })
        .catch((err)=>{
            res.send(err);
        })
}


//Async  Await

const completarTareas= async(req, res)=>{
    //async nos permite usar el await dentro de al funcion
    try{
        const user = await user.findById(req.userId);
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send("Tasks Saved");
    } catch (e){
        res.send(e);
    }
}