import React from 'react'
import { Image, Card } from 'semantic-ui-react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
} from 'react-share';

class AppIntro extends React.Component {
  render(){
    return(
      <Card id="info-card">
        <Image id="image" size="tiny" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAACrCAMAAADiivHpAAAAZlBMVEX////u7u5mZmbt7e339/f09PTx8fH6+vr8/Px1dXVjY2NaWlpfX19gYGBZWVlnZ2dwcHCIiIje3t7S0tKfn5/k5OS5ubmoqKh/f3+Ojo6wsLDAwMBxcXGZmZnV1dV9fX3Jycm/v7/KxuvXAAAMQklEQVR4nO1d6ZqqMAyllhYsi4q73plx3v8lL2XRVgpdCIuO+XXzjfcQDm2adEk9rxAfccFhoYS4UILyT6Xil0rxM0RKhRYKLRVS/kmCK5VAh62CoyIcsYIDNrWC8z5EfYj6EPUqRCnf7K8Qhc2eLr8ZFp+Oxadj8ek67AoOcQ1TERuJ2NjOVKQxVYZrN7Umyi+FFNJD6Y8wPFwfbAXxWCQeO7WR1o+KtR81FLF1zRn3b861qViHbdqVNU9H4tOR3k3oOlOogMMTmvoh6kPUh6iJiMKF3EdoLvcRmsv96YXUTy+kfnoh9dML8UU4IsLdny7ASdihiC3DYQ1cf1NVb16bGhbiUy6oVAJUKEH5t1LxC8Urf0YEhdJSIYJiDNfEpqQdzg4b1tTqwzlGce2tH3W3fnXAWSj6yBzIVNuAU3qzGeR6RAE3pxRmBkTlUHkcTCufgPOgmKqawAsRBZ0UV9gkux436xWLubDVenO8ZvMjyqbjIzHS750Ul+NYuN2t4zhhbFELY0kcr3fbkL8MfsCNbWpNlDjq0aD0/QrFL39XjUylQpoKleDasQU4QgMv27EoeXD0EJZEbJdV4Dq4QU3tiKOawQmCjaNquNsyShQk1ZKkP1sBe8g4SsJ+iqNMuzJwuPvA/l5GqrYktatoufWmjswnIqp2E2iTaliqqDqhP03UIdW1pjtV6aUwyGDIfTui6P4UGdLEJVru6YTf1MaZwybFZBubNqe6/23JdM48KKScH6alEpSKLyjED/m/Q4VCQuFnlSLBKbBJju1djbyTIKtF+usFeexuYSpRmOrbmVr+zlM0V6vIHLu0fg53seWJS3rpkb/rJ+znlxT7bjzljurojW7qlES58pQzdfFfhqj+STGx9k8CUwcyJVGajm8Va2s7Pt1GuWd2ZmpLxzNV3aJQKPBahRshcnm6qAQiNoeje2eSuLAFj6dC0br+poZqUx9wk8RR564cWC/JxhsojupaXHDqyv3C3atNPK6QVfQ7lqkCtilRcHkB7deeijaF/kKu9wVA1PkPELXv2fEKiTIyNlEaZ45EDwkyw7lh7pHBXdjGR8Ob+sDOnbk/rgQZRIPKm9R3MK7hnvAVnpb/7y1UIL5U7i3UfoTOGxQIUeysMxVJpqraiMbUUIKriUKNrjxMXoBgGlTepPDQpk6bFB9iIKLiy/yJ6pMUL2F6Xt73lrMkyimBUjwdJDYoJdoPa2odTDzPHjSducteLp2HPMQAsUEp8cHrHPBdTO14c/c4CjkEJ+QE1fPyvnci4KZKSfETrVBd2aj1YzCaOFOYDmjqpEkx/YZzUeUE3pvmevQXKjjgEh/eliiy6z9x8JBkR6ZNitFgzpyc4Xw5T4zJgOOOTEPuzO8rt8Jyr7hs2qH4TSXoVALAQS8n6scfztQGgid8BZM4ql+mCRaXF0T9G/M0QE0UanTlAfKCcA1K1DqcXwoDRBRYWF4yFcycKOekGJioZO5EzaVFLaYgytSZO3jIhzOH9VGLwke1OvN+pj5oqImStmMr9mabbscORISWrd4EdtRbGpiqta59V7oMN8x5qRaPBjl5UEwfDGdqkwbTrgySwnyBEnUeNYUZkyh6gUyKk+P7EnUDnT24Tjh7gBW/MHq62QEnoNXPUqJsSFMb2Ha+3+i8VAccZHywHtbUWqlHvforjBFHgexkqSX58jqTYhdT55IUe94Nru/Ft2FNnXalmMB585i8M1FQezT4/ObQpk67pA7W96LbNESJQ2rH07FEFNcsq00FQDwtFqHVN22aansWpn2yWDuBbjgRLcEFQMF5fAzsTTWdJlfOmTc7k9t5KdMDTkDuPNnzRjKsqUL7m2Kz6xGCqfjoj2DqtEQFEOMe899/+7T323/giw6z2mfunGlqnv7Tt03x3XbjmOrQokRFPoRk/Zl6b7vjm+3GMfUZe7SkuMAmPUOE+EJadnq/T1JcYpNNn0mEZEPGM3XaM8UU95iXYms8oqnTEoUpXrgyxVhGX4UogIpk4V5ZLsqApySjY35TuDLdDnWNMcd2YypvT6GhqUhjqm1SPO4ZpYeEmUPvY4ssnMheXTY4WJluTPdL27EvWeepcM/m7Nj+piyLRNHZrkxEdEb0bxbaIleLwkisLKHxJ4nCHt4YliRj6QmTCU2dunSb591WJplftLrV2FOZKqVEwGW6zdKtw0JTNpHFq0MDbpCiH6o3lzLDp4CzVAKRa7AorglHyHWZJou2sjZJujwUvQ5L2BLcCKYqiQKOzA1G6GzHUoVjZ3HKdlltvzmciaky7+3YU+Z6yurT2fEUR3GSJKyQJImj6HQpyirLXmdkU2dHlEcIza6X3deGy9fucvumRMR+PaJ6JsWUthd+p7R6kM+33tRwDaLo7JNimSgsPt0wi6B+dsQ1HRJRqMiXVXBPWSzFW0JHMFUmasjV1SZc6N1+0nj1HfaAC75X6fI3CJ1NNTyLJSNol+h7ZZpYwsaI3Hip6RVLj7z/KWc6pFmUpzkefiYPBYeU5zOrA4cYylQBboLInGSnOrSMl7yukUyUPLOngOMKyX6qSD5a395zVzChRyECZ9EujyIticr/x07ASM97aVh8E6KytbxIFbMDtSOK0sNCwkjY7f2I+m0mdPH6ZkXU7/p5PTB3dqMRNWRSLJxW3aWKXI5F64NvuAbp/65VuXN88j24pFjK35+SYpcTSbZXYxB8itU5L4vjr21ua+cmdy8k26+kZY4vWe2J5c5xp7NYntRc++y3am/9aP+vY3Y8idbHLHyGow+4MDuuO675YPE3dTHVdhWm+jmyIMoyLwj3K818UxItzocMU34J032M5C0gD+MP51WqWdmKtx6QqdMmxVTDU9UuomR53h2u35hzRLLt7XA8L+PIZFY9zeZJlF1SHBjvMyguYYrSQqJIvqCpW+L9aETZ+Ci7bWcnyHosLcIYgTDV/O4qu1GvdZgS4Lwz5BG9dqaWJqMe7TPqDTtjT46QJ/Q6pNg01ctU3eKCU1c2DXcp4GkqjcQXMlBkXtFgSpTL0+ne2B33l2hLe5iq92hDEgV7fF8jbGUYQs6QqMtoHY9Lch6UqAGdORplwHtIunU21fLuKtV5KdPDU8255wDsEKOZrBYr6gPOmctv7ikaTFjWHbu3UIF4izLdtO8dFPYS7whqKdPdNNVgS/xIZbqBayCZSPRN55TrGT2dgBw3sxRe1wa4qPLQSTHdj5DiNSW60Rcr000AS0FYCFvSXi1KEUw8zx5IzlwaRW0uMrg/fT9Bx+MSXamhqbbOvD2O6rW4MIWH4sJ+ZpUUNzsqkj0aYMUMS4m2gY2pEyfFIWhFLSthp1DndWaU69EJYqhaeCz1KkTB1i23FF76bgii2p25c+1rRHsfr+4jyR4hgLur0NMYOcRJJNAKbdYSX4Y4geUJDaZl+b89KW4LTo6TBJu1lFfr9I+jRjh8DVvp1lqKq3XmkOvpnv7tfgkxiMTHmRClS4pBr6BwEF46/yWS4vW0PC0W6X44ojqcuejSpGCixUPuJ+551ZVyJqZ2vvlTmW4d8fVimfgVVBdE3w84kWnHPC7sh3TdZa06i0VFGqQ3l3I9yPNSoy7mtUi071cCt5UoyBQGT5i+1BLf6OxzvRG3G7RLsiPzJ2q6GZaH5E5qGKIADiHVT4e9n8pVEmzro7BIlIoGcTk0rBZUw6ZSLpvS8mc+FVZXAyouqFLybw5ERRkJBLtbTG2+uYIGx7urtMFJMAMXVZSmnvvdVYD3xvaQPOQ0db5I9CkKGoYiajsLopKv2RN1ncGgVxTxnjtRc4gOism7gYhSuDS3IiLHmMmyYK3S8SczaQdYOzlz/d1VfushJKLYjt1xNQY5/lvOQU6Wt3ho39ztvFRXwCkGHWU4Uv2nMmypGq0UnFgpoYgdiHC++Lt6osMmKVbPDYyw2bUDW4SzOXz9N+tHfYj6Y0Q5JcXtT29mmrYFIiY0FUk3NtZKceQq/0yluy8Uv1BQ2FDCsFQCQamGkic4KsC1YwftcEiEMzQ1aJpaD3SWptZfASopbsJpl/+1u9iIAs5rheth6tzKdLeXRbrDURHuVetHfYj6EAVLFECZ7tclyjDSl9+MawB1je/OXIBTlHDqiLrGKNNdzZmXIil++59cFGC4sU3tSorFjzrIhVAuAWfn/VJQpqq6imlX/qQwH6I+RH2I+hA1X6L+A6nop+vNnmmFAAAAAElFTkSuQmCC' circular/>
        <p id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div id="share-icons">
          <FacebookIcon size={32} round={true} />
          <TwitterIcon size={32} round={true} />
          <WhatsappIcon size={32} round={true} />
          <LinkedinIcon size={32} round={true} />
          <PinterestIcon size={32} round={true} />
          <RedditIcon size={32} round={true} />
          <TumblrIcon size={32} round={true} />
          <EmailIcon size={32} round={true} />
        </div>
      </Card>
    )
  }
}

export default AppIntro
