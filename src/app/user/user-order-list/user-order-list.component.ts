import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../component/public/cart/order';
import {OrderService} from '../../component/public/cart/order.service';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.css']
})
export class UserOrderListComponent implements OnInit {
  @Input() orderList: Order[];
  @Output() updateList = new EventEmitter();
  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
  }

  deleteOrder(id: number) {
    this.orderService.deleteItem(id).subscribe(next => {
      this.updateList.emit();
    }, error => {
      console.log(error);
    });
  }
}
