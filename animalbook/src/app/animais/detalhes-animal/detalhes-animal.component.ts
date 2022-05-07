import { AnimaisService } from './../animais.service';
import { Animal } from './../animal';
import { Observable, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-animal',
  templateUrl: './detalhes-animal.component.html',
  styleUrls: ['./detalhes-animal.component.css'],
})
export class DetalhesAnimalComponent implements OnInit {
  animal$!: Observable<Animal>;
  private animalId!: number;

  constructor(
    private readonly _animaisService: AnimaisService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this._activatedRoute.snapshot.params['animalId'];
    this.animal$ = this._animaisService.buscarPorId(this.animalId);
  }

  curtir() {
    this._animaisService
      .curtir(this.animalId)
      .pipe(take(1))
      .subscribe({
        next: (curtida) => {
          if (curtida) {
            this.animal$ = this._animaisService.buscarPorId(this.animalId);
          }
        },
        error: (error) => console.log(error),
      });
  }

  excluir() {
    this._animaisService
      .excluir(this.animalId)
      .pipe(take(1))
      .subscribe({
        next: () => this._router.navigateByUrl('/animais'),
        error: (error) => console.log(error),
      });
  }
}
