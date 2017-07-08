<?php
 $node = menu_get_object();
  $get_nid = $node->nid;

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 *
 *  $view object is available
 *  $view->result is the array with all fields. Added 
*/

?>
<div id="<?php print $view_id; ?>" class="views-bx-slideshow">
	<?php for($i = 0; $i < count($rows); $i+=$sliderows):?>

		<div id="<?php print $view->result[$i]->nid; ?>" class="slide<?php if($view->result[$i]->nid == $get_nid) { print " nodeactive";} ?><?php if (isset($classes_array[$id])) { print " ".$classes_array[$id];  } ?>">
			<?php for($j=$i; $j<$i+$sliderows; $j++):?>
			<?php if($rows[$j]) print $rows[$j];?>
			<?php endfor;?>
		</div>
	<?php endfor;?>
</div>