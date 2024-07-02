import { Component, inject } from '@angular/core';
import { ProfileService } from '../../shared/api/services/profile.service';
import { ProfileSchema } from '../../shared/api/types/profile.interface';
import { ProfileCardComponent } from '../../entities/profile-card/profile-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles: ProfileSchema[] = []

constructor() {
  this.profileService.getTestAccounts().
  subscribe(value => {
    this.profiles = value
  })
}
}
