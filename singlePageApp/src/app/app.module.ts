import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './leftbody/banner/banner.component';
import { EnquiryFormComponent } from './rightbody/enquiry-form/enquiry-form.component';
import { HomeComponent } from './routes/home/home.component';
import { NewCoursesComponent } from './routes/new-courses/new-courses.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualClassesComponent } from './routes/virtual-classes/virtual-classes.component';
import { CourseService } from './course.service';
import { ReviewService } from './review.service';
import { EnquiryService } from './enquiry.service';
import { CourseListComponent } from './routes/home/course-list/course-list.component';
import { CourseComponent } from './routes/home/course/course.component';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { OffercodePipe } from './offercode.pipe';
import { OfferService } from './offer.service';
import { FiltercoursePipe } from './filtercourse.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferbannerDirective } from './directives/offerbanner.directive';

const routes = [
  { path: "", component: HomeComponent },
  { path: "newCourses", component: NewCoursesComponent },
  { path: "reviews", component: ReviewsComponent },
  { path: "offices", component: OfficesComponent },
  { path: "offers", component: OffersComponent },
  { path: "virtualClasses", component: VirtualClassesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryFormComponent,
    HomeComponent,
    NewCoursesComponent,
    ReviewsComponent,
    OfficesComponent,
    OffersComponent,
    VirtualClassesComponent,
    CourseListComponent,
    CourseComponent,
    ReviewlistComponent,
    ReviewComponent,
    OffercodePipe,
    FiltercoursePipe,
    HighlightDirective,
    OfferbannerDirective,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), 
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [CourseService, ReviewService, EnquiryService, OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
