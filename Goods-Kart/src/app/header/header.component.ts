import { Component } from "@angular/core";
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';


@Component({
    imports:[MenubarModule,AvatarModule],
    selector:'app-header',
    templateUrl:'./header.component.html',
    standalone:true
})

export class HeaderComponent {
    items: MenuItem[] | undefined;
    
    ngOnInit(){
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Categories',
                icon: 'pi pi-star',
                items:[
                    {label:'Games'},{label:'Electronics'},{label:'Shoes'},{label:'Grocery'}
                ]
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }
}