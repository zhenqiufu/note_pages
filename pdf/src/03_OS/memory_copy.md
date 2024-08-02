# memcpy

```c

561 void *memcpy(void *dest, const void *src, size_t count)
562 {
563         char *tmp = dest;
564         const char *s = src;
565 
566         while (count--)
567                 *tmp++ = *s++;
568         return dest;
569 }
```

