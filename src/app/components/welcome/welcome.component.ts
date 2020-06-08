import { Component, OnInit } from '@angular/core';

export interface Section {
  item: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  introductionContent: Section[] = [
    {
      item: `Liability: As an entrepreneur, in principle you can be held liable for all direct and indirect damage. 
      Although you may never rule out your liability entirely, you can limit it via your terms and conditions.`,
    },
    {
      item: `Payment term: The legal payment term for invoices is 30 days. 
      If you want a shorter payment term for your invoices, you will need to have explicitly agreed this via your general terms and conditions or in a contract.`,
    },
    {
      item: `Retention of title: By including retention of title, you can ensure that as an entrepreneur you remain the owner of the item you deliver.This means that as owner, you have the right to reclaim the item as long as the invoice has not been paid. 
      This also is the case if your counterparty goes bankrupt or into liquidation.`,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
