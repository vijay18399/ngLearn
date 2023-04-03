import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent {
  htmlstring="<h2>dndnd</h2><br>  <p style='color : red'>       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus quo velit placeat nam. Quas repellat sit est, asperiores perferendis, nulla maxime consequatur fugit odio unde et distinctio temporibus quibusdam, quasi qui mollitia fuga non sapiente sequi quidem. Vero qui commodi quod rerum. Accusantium quae ut qui sequi aut possimus, nulla laudantium animi nostrum sapiente voluptatem, quidem reiciendis totam hic sint, ipsam fugit quia delectus doloribus praesentium temporibus quaerat. Recusandae enim mollitia exercitationem error voluptas. Maxime, quasi eum quisquam nam totam, minima fugit placeat ratione impedit doloribus expedita suscipit obcaecati illum alias consequatur eaque non dolor amet autem nisi est!</p>"
  comments: {name: string, message: string}[] = [ { name: 'Fernand', message: 'we wont use hime' },{ name: 'Raja ram', message: 'hello Bro om i will do ' }];
  newComment = { name: '', message: '' };
}
