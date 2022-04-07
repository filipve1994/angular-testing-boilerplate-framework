import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PickListModule } from 'primeng/picklist';
import { CheckboxModule } from 'primeng/checkbox';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { ChipsModule } from 'primeng/chips';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

const importModulesArr = [];

const exportsModules = [];

const modulesArr = [
  CalendarModule,
  CheckboxModule,
  ChipsModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  DialogModule,
  DropdownModule,
  InputTextModule,
  InputTextareaModule,
  MenuModule,
  MessagesModule,
  MessageModule,
  PanelModule,
  PickListModule,
  RadioButtonModule,
  RippleModule,
  SplitButtonModule,
  TableModule,
  TabViewModule,
  TieredMenuModule,
  ToastModule,
  ToolbarModule,
  TreeModule,
  TreeTableModule,
  TooltipModule,
  TriStateCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modulesArr],
  exports: modulesArr
})
export class ImportPrimengModule {}
