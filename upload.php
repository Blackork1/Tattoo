<?php 

/*Get the name of the uploaded File*/
$filename = $_FILES['file']['name'];


/*choose where to save the uploaded file */
$location = "upload/".$filename;

/*Save the uploaded file to the local filesytem */

if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
    echo 'Success'
} else {
    echo 'Failure'
}

?>