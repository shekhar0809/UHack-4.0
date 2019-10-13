import { Component, OnInit } from '@angular/core';

export interface Transaction {
  transactionId: string;
  senderId: string;
  recieverId: string;
  timestamp: string;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  transactions = [
    { transactionId: '12wedf4566mf', senderId: 'jklo09oiuh45', recieverId: 'awse2399ujhy', timestamp: '083020082012'},
    { transactionId: 'asde34rfgthy', senderId: '12wedf4566mf', recieverId: '1234asdfgh67', timestamp: '083020082012'},
    { transactionId: 'qwer3456vfre', senderId: '5419asdf9900', recieverId: 'awse2399ujhy', timestamp: '203030012019'},
    { transactionId: 'mshd6391ashe', senderId: '5419asdf9900', recieverId: 'plok0965oktf', timestamp: '012009112019'},
    { transactionId: 'mknj87ft56se', senderId: '9987erwt4618', recieverId: '12wedf4566mf', timestamp: '001509022010'}
  ];

  ngOnInit() {
  }

}
