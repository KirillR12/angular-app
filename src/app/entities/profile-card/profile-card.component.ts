import { Component, Input } from '@angular/core';
import { SkillTagComponent } from '../../shared/ui/skill-tag/skill-tag.component';
import { ProfileSchema } from '../../shared/api/types/profile.interface';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';


@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [SkillTagComponent, ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})

export class ProfileCardComponent {
  @Input() profile!: ProfileSchema
}
